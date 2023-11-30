import { CosmosTransaction } from '@subql/types-cosmos'
import { TextDecoder } from 'util'

import { toJson, addToUnknownMessageTypes } from '../common/utils'
import { Any as ProtoAny } from '../types/proto-interfaces/google/protobuf/any'
import { DecodedMessage, GenericMessage } from './interfaces'
import { createTransactionObject } from './helper'

const txtDecoder = new TextDecoder('utf-8')

export async function handleTx(tx: CosmosTransaction): Promise<void> {
  const height = tx.block.header.height
  logger.info(`-------- ${height} -----------`)

  const txMessages = []

  for (const { typeUrl, value } of tx.decodedTx.body.messages) {
    const knownType = registry.lookupType(typeUrl)

    if (!knownType) {
      const unknownMsgType = { type: typeUrl, blocks: [height] }
      addToUnknownMessageTypes(unknownMsgType)

      logger.info(`%%%%%%%%%% UnknownType detected %%%%%%%%% ${toJson(unknownMsgType)} `)

      continue
    }

    try {
      const decodedMsg = knownType.decode(value)

      const fullMsg = handleMessageType(decodedMsg, { typeUrl, value })
      txMessages.push(fullMsg)
    } catch (error) {
      throw error // throw the error to stop the indexer
    }
  }

  const transaction = createTransactionObject(tx)
  transaction.messages = txMessages

  logger.info(`Full tx: ${toJson(transaction)}`)
}

/**
 * Helper function to decode messages
 * @param value
 * @param typeUrl
 * @returns
 */
function decodeMessage(value: Uint8Array, typeUrl: string): DecodedMessage {
  const msgType = registry.lookupType(typeUrl)

  if (!msgType) throw new Error(`Detect a not registered proto type ${typeUrl}`)

  const decodedMessage = msgType.decode(value)

  return { type: typeUrl, ...decodedMessage }
}

/**
 * function to decode and handle different types of messages
 * @param decodedMsg
 * @param message
 * @returns
 */
function handleMessageType(decodedMsg: any, message: ProtoAny): GenericMessage {
  const hasMessageProperty = Boolean(decodedMsg.msg || decodedMsg.msgs || decodedMsg.clientMessage)

  const { clientMessage, msgs, msg, ...meta } = decodedMsg

  let genericMessage: GenericMessage = { type: message.typeUrl }

  if (msgs) {
    const messageList = msgs as ProtoAny[]
    const decodedMsgs = messageList.map(({ typeUrl, value }) => decodeMessage(value, typeUrl))
    genericMessage = { msgs: decodedMsgs, ...meta, ...genericMessage }
  } else if (msg) {
    genericMessage = { msg: JSON.parse(txtDecoder.decode(msg)), ...meta, ...genericMessage }
  } else if (clientMessage) {
    const { typeUrl, value } = clientMessage
    genericMessage = { clientMessage: decodeMessage(value, typeUrl), ...meta, ...genericMessage }
  } else if (!hasMessageProperty) {
    genericMessage = { ...decodedMsg, ...genericMessage }
  } else {
    genericMessage = { type: 'unknown' }
  }

  return genericMessage
}
