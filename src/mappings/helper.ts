import { CosmosTransaction } from '@subql/types-cosmos'
import { TextDecoder } from 'util'

import { Any as ProtoAny } from '../types/proto-interfaces/google/protobuf/any'
import { addToUnknownMessageTypes, decodeBase64IfEncoded, getTimestamp } from '../common/utils'
import { CosmosDecodedMessage, DecodedMessage, EventLog, GenericMessage, TransactionObject } from './interfaces'
import { MsgGrantAllowance } from '../types/proto-interfaces/cosmos/feegrant/v1beta1/tx'

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
    events: events,
    messages: [],
    gasUsed: tx.gasUsed.toString(),
    gasWanted: tx.gasWanted.toString(),
    success: tx.code === 0,
    blockNumber: block.header.height,
    timestamp: getTimestamp(block).toString(),
    log: tx.log,
  }
}

/**
 * Helper function to decode messages
 * @param value
 * @param typeUrl
 * @returns
 */
export function decodeMessage({ value, typeUrl }: ProtoAny, block?: number): DecodedMessage {
  const msgType = registry.lookupType(typeUrl)

  if (!msgType) {
    addToUnknownMessageTypes({ type: typeUrl, blocks: [block!] })
    logger.info(`Detect a not registered proto type ${typeUrl}`)
    return { type: typeUrl }
  }

  return { type: typeUrl, ...msgType.decode(value) }
}

/**
 * function to decode and handle different types of messages
 * @param decodedMsg
 * @param message
 * @returns
 */
export function handleMessageType(decodedMsg: CosmosDecodedMessage, message: ProtoAny, block: number): GenericMessage {
  const { clientMessage, msgs, msg, allowance, ...meta } = decodedMsg

  // Check if any of the expected properties (msg, msgs, clientMessage, allowance) exist
  const hasMessageProperty = Boolean(msg || msgs || clientMessage || allowance)

  let genericMessage: GenericMessage = { type: message.typeUrl }

  if (msgs) {
    const messageList = msgs as ProtoAny[]
    const decodedMsgs = messageList.map(({ typeUrl, value }) => decodeMessage({ value, typeUrl }, block))
    genericMessage = { msgs: decodedMsgs, ...meta, ...genericMessage }
  } else if (msg) {
    genericMessage = { msg: JSON.parse(textDecoder.decode(msg)), ...meta, ...genericMessage }
  } else if (clientMessage) {
    const { typeUrl, value } = clientMessage
    genericMessage = { clientMessage: decodeMessage({ value, typeUrl }, block), ...meta, ...genericMessage }
  } else if (allowance) {
    const decodedAllowance = decodeMessage(allowance) as unknown as MsgGrantAllowance
    genericMessage = {
      ...decodeMsgAllowance(decodedAllowance),
      ...meta,
      ...genericMessage,
    }
  } else if (!hasMessageProperty) {
    genericMessage = { ...meta, ...genericMessage }
  } else {
    genericMessage = { type: 'unknown' }
  }

  return genericMessage
}

function decodeMsgAllowance(msg: MsgGrantAllowance): any {
  const { allowance, ...rest } = msg
  return {
    allowance: {
      ...rest,
      allowance: allowance ? decodeMessage(allowance) : undefined,
    },
  }
}
