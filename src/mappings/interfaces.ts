import { Any as ProtoAny } from '../types/proto-interfaces/google/protobuf/any'

type Any = Record<string, any>

export interface GenericMessage {
  [key: string]: any
  type: string
  msg?: Any[]
  msgs?: Any[]
  clientMessage?: Any
}

// Represents a type that is not know by this indexer
export interface UnknownMessageType {
  // Message type name
  type: string
  // List of blocks that this message was found in
  blocks: number[]
}

export interface DecodedMessage {
  type: string
  [key: string]: any
}

export interface EventLog {
  type: string
  attributes: { key: string; value: string }[]
}
export interface TransactionObject {
  id: string;
  // Events emitted from the transaction
  events: any;
  // Messages included in transaction body - saved as json string
  messages: GenericMessage[];
  log: any;
  success: boolean;
  gasUsed: string;
  gasWanted: string;
  // Block number in which the balance was last modified
  blockNumber: number;
  // Timestamp in which the balance was last modified
  timestamp: string;
  chainId: string;
  memo: string;
  authInfo: AuthInfo;
  signatures: readonly Uint8Array[];
  timeoutHeight: Long;
  extensionOptions?:any[];
  nonCriticalExtensionOptions?: any[];
}

export interface AuthInfo {
  signerInfos?: SignerInfo[];
  fee?: Fee;
}

export interface SignerInfo {
  publicKey?: Any;
  modeInfo?: ModeInfo;
  sequence: Long;
}

export interface ModeInfo {
  single?: ModeInfoSingle;
  multi?: ModeInfoMulti;
}

export interface ModeInfoSingle {
  mode: SignMode;
}

//get it from the lib it self 
export enum SignMode {
  // SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
  // rejected
  SIGN_MODE_UNSPECIFIED = 0,
  // SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
  // verified with raw bytes from Tx
  SIGN_MODE_DIRECT = 1,
  // SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
  // human-readable textual representation on top of the binary representation
  // from SIGN_MODE_DIRECT
  SIGN_MODE_TEXTUAL = 2,
  // SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
  // Amino JSON and will be removed in the future
  SIGN_MODE_LEGACY_AMINO_JSON = 127,
  // SIGN_MODE_EIP_191 - SIGN_MODE_EIP_191 specifies the sign mode for EIP 191 signing on the Cosmos
  // SDK. Ref: https://eips.ethereum.org/EIPS/eip-191
  //
  // Currently, SIGN_MODE_EIP_191 is registered as a SignMode enum variant,
  // but is not implemented on the SDK by default. To enable EIP-191, you need
  // to pass a custom `TxConfig` that has an implementation of
  // `SignModeHandler` for EIP-191. The SDK may decide to fully support
  // EIP-191 in the future.
  //
  // Since: cosmos-sdk 0.45.2
  SIGN_MODE_EIP_191 = 191,
  UNRECOGNIZED = -1,
}

export interface ModeInfoMulti {
  bitarray?: CompactBitArray;
  modeInfos: ModeInfo[];
}

export interface CompactBitArray {
  extraBitsStored: number;
  elems: Uint8Array;
}

export interface Coin {
  denom: string;
  amount: string;
}

export interface Fee {
  amount: Coin[];
  gasLimit: Long;
  payer: string;
  granter: string;
}


export interface TransactionTopic {
  topic: string
  message: TransactionObject
}

export interface CosmosDecodedMessage {
  clientMessage?: ProtoAny
  msgs?: ProtoAny[]
  msg?: Uint8Array
  allowance?: ProtoAny
  [key: string]: any // Add other possible properties
}
