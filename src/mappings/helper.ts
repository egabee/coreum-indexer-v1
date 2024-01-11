/* eslint-disable @typescript-eslint/no-unused-vars */
import { CosmosTransaction } from '@subql/types-cosmos'
import { TextDecoder } from 'util'

import { Any as ProtoAny } from '../types/proto-interfaces/google/protobuf/any'
import { addToUnknownMessageTypes, decodeBase64IfEncoded, getTimestamp, toJson } from '../common/utils'
import { DecodedMessage, EventLog, GenericMessage, TransactionObject } from './interfaces'
import { error } from 'console'

const textDecoder = new TextDecoder('utf-8')

export function createTransactionObject(cosmosTx: CosmosTransaction): TransactionObject {
  const { tx, block } = cosmosTx
  
  const events: EventLog[] = tx.events.map(({ type, attributes }: any) => ({
    type,
    attributes: attributes.map(({ key, value }: any) => ({
      key: key,
      value: value,
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
export function decodeMessage(value: any, typeUrl: string, block?: number): DecodedMessage {
  const msgType = registry.lookupType(typeUrl)
  
  if (!msgType) {
    addToUnknownMessageTypes({ type: typeUrl, blocks: [block!] })
    // logger.info(`Detect a not registered proto type ${typeUrl}`)
    return { type: typeUrl }
  }

  if (msgType.decode) {
    // else decode msg if can and back the type,value
    const decMsg = msgType.decode(value)
    // not right will deleted soon (bcz it become binary bcz the type not added (proto type))
    const fmsg = decMsg !== undefined ? { ...decMsg } : undefined
    return { type: typeUrl, value: fmsg }
  }

  // Handle cases where msgType.decode is not available
  // ----------------------- [ if array ] -------------------
  if (Array.isArray(value)) {
    const decodeArr: any = []
    decodeArr.push(value.map((item, index) => decodeMessage(item, typeUrl, block)))
    return decodeArr
  }
  // ------------------------ {if object}
  if (typeof value === 'object') {
    const decodedObject: any = {}
    for (const key in value) {
      decodedObject[key] = decodeMessage(value[key], typeUrl, block)
    }
    return decodedObject
  }

  return { type: typeUrl, value }
}
/**
 * function to decode and handle different types of messages
 @param decodedMsg
 * @param block
 * @returns
 */
// make a recursive function that keep decode any (obj,arr, simple base() ...)
function handleMessageTypeRecursive(decodedMsg: any, block: number, message?: any): GenericMessage | GenericMessage[] {
  const Msg = message
  // check if this is array (recursive it to handel each element)
  if (Array.isArray(decodedMsg)) {
    // If it's an array, recursively handle each element
    return decodedMsg.flatMap((item) => handleMessageTypeRecursive(item, block, Msg));
  }
  // check if this obj we will search for the type and then loop on keys(attributes)
  //  and we will loop on all attributes
  else if (decodedMsg && typeof decodedMsg === 'object') {
    // If it's an object, process each key-value pair
    if (decodedMsg['@type'] || decodedMsg.$type?.name) {
      const genericMessage: GenericMessage = {
        type: message?.typeUrl || decodedMsg['@type'] || decodedMsg.$type?.name || 'unknown',
      }

      // on every iteration (in key) we will see the field and check if they encoded in base64
      // or not and change in the place of each field
      // and see if value or type faced send to decode again or for recursive
      for (const field of Object.keys(decodedMsg)) {
        if (field === 'value') {
          genericMessage[field] = decodeMessage(decodedMsg[field], decodedMsg.typeUrl, block)
        } else if (field === '@type' || (field === '$type' && decodedMsg['$type'].name)) {
          // -------------------------- decodedMsg[field] ------------------------
          genericMessage.type = decodedMsg[field]
        } else if (!isNaN(parseInt(field))) {
          // Convert numeric keys to an array
          genericMessage.msg = genericMessage.msg || []
          genericMessage.msg.push(handleMessageTypeRecursive(decodedMsg[field], block))
        } else {
          genericMessage[field] = handleMessageTypeRecursive(decodedMsg[field], block)
        }

        // logger.info(`thsi is generic ===== ${toJson(genericMessage)}`)
      }

      return genericMessage
    } else {
      // decodedMsg = decodedMsg ? (Array.isArray(decodedMsg) ? String.fromCharCode(...decodedMsg) : decodedMsg) : Msg
      decodedMsg = Array.isArray(decodedMsg) ? textDecoder.decode(Uint8Array.from(decodedMsg)) : Msg;


      return decodedMsg
    }
  } else {
    // Base case -> return the value for non-object types
    // logger.info(`Base case ${decodedMsg}`)
    return decodedMsg
  }
}

/**
 * Main function to decode and handle different types of messages
 * @param decodedMsg
 * @param message
 * @param block
 * @returns
 */
export function handleMessageType(
  decodedMsg: any,
  block: number,
  message?: ProtoAny,
): GenericMessage | GenericMessage[] {
  try {
    return handleMessageTypeRecursive(decodedMsg, block, message)
  } catch (error) {
    // Handle errors as needed
    logger.info(`Error handling message: ${error}`)
    return { type: 'error' }
  }
}
