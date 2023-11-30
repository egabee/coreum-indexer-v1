import { CosmosTransaction } from '@subql/types-cosmos'

import { decodeBase64IfEncoded, getTimestamp } from '../common/utils'
import { EventLog, TransactionObject } from './interfaces'

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
