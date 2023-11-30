import { CosmosTransaction } from '@subql/types-cosmos'
import { TextDecoder } from 'util'

import { Any as ProtoAny } from '../types/proto-interfaces/google/protobuf/any'
import { decodeBase64IfEncoded, getTimestamp } from '../common/utils'
import { DecodedMessage, EventLog, GenericMessage, TransactionObject } from './interfaces'

const textDecoder = new TextDecoder('utf-8')

export function createTransactionObject(cosmosTx: CosmosTransaction): TransactionObject {
  const { tx, block } = cosmosTx

  const events: EventLog[] = tx.events.map(({ type, attributes }: any) => ({
    type,
    attributes: attributes.map(({ key, value }: any) => ({
      key: decodeBase64IfEncoded(key),
      value: decodeBase64IfEncoded(value),
    })),
  }))

  return {
    id: cosmosTx.hash,
    events,
    messages: [],
    gasUsed: BigInt(tx.gasUsed),
    gasWanted: BigInt(tx.gasWanted),
    success: tx.code === 0,
    blockNumber: block.header.height,
    timestamp: getTimestamp(block),
    log: tx.log || '',
  }
}

/**
 * Helper function to decode messages
 * @param value
 * @param typeUrl
 * @returns
 */
export function decodeMessage(value: Uint8Array, typeUrl: string): DecodedMessage {
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
export function handleMessageType(decodedMsg: any, message: ProtoAny): GenericMessage {
  const hasMessageProperty = Boolean(decodedMsg.msg || decodedMsg.msgs || decodedMsg.clientMessage)

  const { clientMessage, msgs, msg, ...meta } = decodedMsg

  let genericMessage: GenericMessage = { type: message.typeUrl }

  if (msgs) {
    const messageList = msgs as ProtoAny[]
    const decodedMsgs = messageList.map(({ typeUrl, value }) => decodeMessage(value, typeUrl))
    genericMessage = { msgs: decodedMsgs, ...meta, ...genericMessage }
  } else if (msg) {
    genericMessage = { msg: JSON.parse(textDecoder.decode(msg)), ...meta, ...genericMessage }
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
