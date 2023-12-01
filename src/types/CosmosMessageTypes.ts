// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import { CosmosMessage } from '@subql/types-cosmos'

import { MsgUnjail } from './proto-interfaces/cosmos/slashing/v1beta1/tx'

import { DefaultNodeInfo, DefaultNodeInfoOther } from './proto-interfaces/cosmos/tendermint/p2p/types'

import { RequestFinalizeBlock } from './proto-interfaces/cosmos/tendermint/abci/types'

import { Tx, TxRaw, TxBody } from './proto-interfaces/cosmos/tx/v1beta1/tx'

import { Header } from './proto-interfaces/ibc/lightclients/tendermint/v1/tendermint'

import { SignedHeader } from './proto-interfaces/cosmos/tendermint/types/types'

import { ValidatorSet, Validator } from './proto-interfaces/cosmos/tendermint/types/validator'

import { PublicKey } from './proto-interfaces/cosmos/tendermint/crypto/keys'

import { Consensus } from './proto-interfaces/cosmos/tendermint/version/types'

import { MsgVote } from './proto-interfaces/cosmos/gov/v1beta1/tx'

import { VoteOption } from './proto-interfaces/cosmos/gov/v1beta1/gov'

import { MsgUpdateClient, MsgCreateClient } from './proto-interfaces/ibc/core/client/v1/tx'

import { MsgTransfer } from './proto-interfaces/ibc/applications/transfer/v1/tx'

import { Height } from './proto-interfaces/ibc/core/client/v1/client'

import {
  MsgRecvPacket,
  MsgAcknowledgement,
  MsgChannelOpenInit,
  MsgChannelOpenAck,
  MsgChannelOpenConfirm,
} from './proto-interfaces/ibc/core/channel/v1/tx'

import { Packet } from './proto-interfaces/ibc/core/channel/v1/channel'

import { MsgGrant } from './proto-interfaces/cosmos/authz/v1beta1/tx'

import { Grant } from './proto-interfaces/cosmos/authz/v1beta1/authz'

import { MsgSend, MsgMultiSend } from './proto-interfaces/cosmos/bank/v1beta1/tx'

import { Input, Output } from './proto-interfaces/cosmos/bank/v1beta1/bank'

import { Coin } from './proto-interfaces/cosmos/base/v1beta1/coin'

import { MsgWithdrawDelegatorReward } from './proto-interfaces/cosmos/distribution/v1beta1/tx'

import { MsgDelegate, MsgBeginRedelegate } from './proto-interfaces/cosmos/staking/v1beta1/tx'

import { MsgInstantiateContract, MsgExecuteContract } from './proto-interfaces/cosmwasm/wasm/v1/tx'

import { Any } from './proto-interfaces/google/protobuf/any'

import { Timestamp } from './proto-interfaces/google/protobuf/timestamp'

import {
  MsgIssueClass,
  MsgMint as MsgMintNFT,
  MsgBurn as MsgBurnNFT,
  MsgFreeze as MsgFreezeNFT,
  MsgUnfreeze as MsgUnfreezeNFT,
  MsgAddToWhitelist,
  MsgRemoveFromWhitelist,
  MsgClassFreeze,
  MsgClassUnfreeze,
  MsgAddToClassWhitelist,
  MsgRemoveFromClassWhitelist,
  MsgUpdateParams as MsgUpdateParamsNFT,
} from './proto-interfaces/coreum/asset/nft/v1/tx'

import { ClassFeature } from './proto-interfaces/coreum/asset/nft/v1/nft'

import { SendAuthorization, NFTIdentifier } from './proto-interfaces/coreum/asset/nft/v1/authz'

import { MsgSend as MsgSendNFT } from './proto-interfaces/coreum/nft/v1beta1/tx'

import { Class, NFT } from './proto-interfaces/coreum/nft/v1beta1/nft'

import {
  MsgIssue,
  MsgMint,
  MsgBurn,
  MsgFreeze,
  MsgUnfreeze,
  MsgGloballyFreeze,
  MsgGloballyUnfreeze,
  MsgSetWhitelistedLimit,
  MsgUpgradeTokenV1,
  MsgUpdateParams,
} from './proto-interfaces/coreum/asset/ft/v1/tx'

import {
  Token,
  Feature,
  Definition,
  DelayedTokenUpgradeV1,
  TokenUpgradeV1Status,
  TokenUpgradeStatuses,
} from './proto-interfaces/coreum/asset/ft/v1/token'

import { MintAuthorization, BurnAuthorization } from './proto-interfaces/coreum/asset/ft/v1/authz'

import { MsgUpdateParams as MsgUpdateParamsFeeModel } from './proto-interfaces/coreum/feemodel/v1/tx'

export type MsgUnjailMessage = CosmosMessage<MsgUnjail>

export type DefaultNodeInfoMessage = CosmosMessage<DefaultNodeInfo>
export type DefaultNodeInfoOtherMessage = CosmosMessage<DefaultNodeInfoOther>

export type RequestFinalizeBlockMessage = CosmosMessage<RequestFinalizeBlock>

export type TxMessage = CosmosMessage<Tx>
export type TxRawMessage = CosmosMessage<TxRaw>
export type TxBodyMessage = CosmosMessage<TxBody>

export type HeaderMessage = CosmosMessage<Header>

export type SignedHeaderMessage = CosmosMessage<SignedHeader>

export type ValidatorSetMessage = CosmosMessage<ValidatorSet>
export type ValidatorMessage = CosmosMessage<Validator>

export type PublicKeyMessage = CosmosMessage<PublicKey>

export type ConsensusMessage = CosmosMessage<Consensus>

export type MsgVoteMessage = CosmosMessage<MsgVote>

export type VoteOptionMessage = CosmosMessage<VoteOption>

export type MsgUpdateClientMessage = CosmosMessage<MsgUpdateClient>
export type MsgCreateClientMessage = CosmosMessage<MsgCreateClient>

export type MsgTransferMessage = CosmosMessage<MsgTransfer>

export type HeightMessage = CosmosMessage<Height>

export type MsgRecvPacketMessage = CosmosMessage<MsgRecvPacket>
export type MsgAcknowledgementMessage = CosmosMessage<MsgAcknowledgement>
export type MsgChannelOpenInitMessage = CosmosMessage<MsgChannelOpenInit>
export type MsgChannelOpenAckMessage = CosmosMessage<MsgChannelOpenAck>
export type MsgChannelOpenConfirmMessage = CosmosMessage<MsgChannelOpenConfirm>

export type PacketMessage = CosmosMessage<Packet>

export type MsgGrantMessage = CosmosMessage<MsgGrant>

export type GrantMessage = CosmosMessage<Grant>

export type MsgSendMessage = CosmosMessage<MsgSend>
export type MsgMultiSendMessage = CosmosMessage<MsgMultiSend>

export type InputMessage = CosmosMessage<Input>
export type OutputMessage = CosmosMessage<Output>

export type CoinMessage = CosmosMessage<Coin>

export type MsgWithdrawDelegatorRewardMessage = CosmosMessage<MsgWithdrawDelegatorReward>

export type MsgDelegateMessage = CosmosMessage<MsgDelegate>
export type MsgBeginRedelegateMessage = CosmosMessage<MsgBeginRedelegate>

export type MsgInstantiateContractMessage = CosmosMessage<MsgInstantiateContract>
export type MsgExecuteContractMessage = CosmosMessage<MsgExecuteContract>

export type AnyMessage = CosmosMessage<Any>

export type TimestampMessage = CosmosMessage<Timestamp>

export type MsgIssueClassMessage = CosmosMessage<MsgIssueClass>
export type MsgMintMessageNFT = CosmosMessage<MsgMintNFT>
export type MsgBurnMessageNFT = CosmosMessage<MsgBurnNFT>
export type MsgFreezeMessageNFT = CosmosMessage<MsgFreezeNFT>
export type MsgUnfreezeMessageNFT = CosmosMessage<MsgUnfreezeNFT>
export type MsgAddToWhitelistMessage = CosmosMessage<MsgAddToWhitelist>
export type MsgRemoveFromWhitelistMessage = CosmosMessage<MsgRemoveFromWhitelist>
export type MsgClassFreezeMessage = CosmosMessage<MsgClassFreeze>
export type MsgClassUnfreezeMessage = CosmosMessage<MsgClassUnfreeze>
export type MsgAddToClassWhitelistMessage = CosmosMessage<MsgAddToClassWhitelist>
export type MsgRemoveFromClassWhitelistMessage = CosmosMessage<MsgRemoveFromClassWhitelist>
export type MsgUpdateParamsMessageNFT = CosmosMessage<MsgUpdateParamsNFT>

export type ClassFeatureMessage = CosmosMessage<ClassFeature>

export type SendAuthorizationMessage = CosmosMessage<SendAuthorization>
export type NFTIdentifierMessage = CosmosMessage<NFTIdentifier>

export type MsgSendNFTMessage = CosmosMessage<MsgSendNFT>

export type ClassMessage = CosmosMessage<Class>
export type NFTMessage = CosmosMessage<NFT>

export type MsgIssueMessage = CosmosMessage<MsgIssue>
export type MsgMintMessage = CosmosMessage<MsgMint>
export type MsgBurnMessage = CosmosMessage<MsgBurn>
export type MsgFreezeMessage = CosmosMessage<MsgFreeze>
export type MsgUnfreezeMessage = CosmosMessage<MsgUnfreeze>
export type MsgGloballyFreezeMessage = CosmosMessage<MsgGloballyFreeze>
export type MsgGloballyUnfreezeMessage = CosmosMessage<MsgGloballyUnfreeze>
export type MsgSetWhitelistedLimitMessage = CosmosMessage<MsgSetWhitelistedLimit>
export type MsgUpgradeTokenV1Message = CosmosMessage<MsgUpgradeTokenV1>
export type MsgUpdateParamsMessage = CosmosMessage<MsgUpdateParams>

export type TokenMessage = CosmosMessage<Token>
export type FeatureMessage = CosmosMessage<Feature>
export type DefinitionMessage = CosmosMessage<Definition>
export type DelayedTokenUpgradeV1Message = CosmosMessage<DelayedTokenUpgradeV1>
export type TokenUpgradeV1StatusMessage = CosmosMessage<TokenUpgradeV1Status>
export type TokenUpgradeStatusesMessage = CosmosMessage<TokenUpgradeStatuses>

export type MintAuthorizationMessage = CosmosMessage<MintAuthorization>
export type BurnAuthorizationMessage = CosmosMessage<BurnAuthorization>

export type MsgUpdateParamsMessageFeeModel = CosmosMessage<MsgUpdateParamsFeeModel>
