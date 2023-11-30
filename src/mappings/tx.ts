import { CosmosTransaction } from '@subql/types-cosmos'
import { TextDecoder } from 'util'

import { toJson, addThisType } from '../common/utils'
import { Any } from '../types/proto-interfaces/google/protobuf/any'

const txtDecoder = new TextDecoder('utf-8')

interface GenericMessage {
  [key: string]: any
  type: string
  msg?: Record<string, any>[]
  msgs?: Record<string, any>[]
  clientMessage?: Record<string, any>
}

export async function handleTx(msg: CosmosTransaction): Promise<void> {
  const height = msg.block.header.height
  logger.info(`-------- ${height} -----------`)

  for (const message of msg.decodedTx.body.messages) {
    const knownType = registry.lookupType(message.typeUrl)

    if (!knownType) {
      const uk: Record<string, any> = { type: message.typeUrl, heights: [height] }
      logger.info(`%%%%%%%%%% Unknown %%%%%%%%% ${toJson(uk)} `)
      addThisType(uk)
      continue
    }

    try {
      const decodedMsg = knownType.decode(message.value)
      const fullMsg: GenericMessage = handleMessageType(decodedMsg, message)

      // logger.info(`----------this is Full-----${toJson(fullMsg)}----------------------`)
    } catch (error) {
      throw error // throw the error to stop the indexer
    }
  }
}

// helper function to decode messages
function decodeMessage(value: Uint8Array, typeUrl: string | undefined): { type: string; [key: string]: any } {
  const gtype = typeUrl ? registry.lookupType(typeUrl) : undefined
  const decodedMessage = gtype?.decode(value)
  return { type: typeUrl, ...decodedMessage }
}

//function to decode and handle different types of messages
function handleMessageType(decodedMsg: any, message: Any): GenericMessage {
  const foundProp = Boolean(decodedMsg.msg || decodedMsg.msgs || decodedMsg.clientMessage)

  const { clientMessage, msgs, msg, ...meta } = decodedMsg

  if (msgs) {
    const Msgs: Any[] = msgs
    const decodedMsgs = Msgs.map(({ typeUrl, value }) => decodeMessage(value, typeUrl))
    return { msgs: decodedMsgs, type: message.typeUrl, ...meta }
  } else if (msg) {
    const msgstr = txtDecoder.decode(msg)
    const msgstring = JSON.parse(msgstr)
    return { msg: msgstring, type: message.typeUrl, ...meta }
  } else if (clientMessage) {
    const { typeUrl, value } = clientMessage
    const decodedMessage = decodeMessage(value, typeUrl)
    return { clientMessage: decodedMessage, type: message.typeUrl, ...meta }
  } else if (!foundProp) {
    return { ...decodedMsg, type: message.typeUrl }
  }

  return { type: 'unknown' }
}
