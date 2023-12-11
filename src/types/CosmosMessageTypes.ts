// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import { CosmosMessage } from '@subql/types-cosmos'
// Auth
import { MsgUpdateParams as AuthMsgUpdateParams } from './proto-interfaces/cosmos/auth/v1beta1/tx'
import {
  BaseAccount,
  ModuleAccount,
  ModuleCredential,
  Params as AuthParams,
} from './proto-interfaces/cosmos/auth/v1beta1/auth'

// Authz
import { MsgGrant, MsgExec, MsgRevoke } from './proto-interfaces/cosmos/authz/v1beta1/tx'
import {
  Grant,
  GenericAuthorization,
  GrantAuthorization,
  GrantQueueItem,
} from './proto-interfaces/cosmos/authz/v1beta1/authz'

// Bank
import {
  MsgSend as MsgSendBank,
  MsgMultiSend,
  MsgUpdateParams as BankMsgUpdateParams,
  MsgSetSendEnabled,
  MsgBurn as MsgBurnBank,
} from './proto-interfaces/cosmos/bank/v1beta1/tx'
import {
  Input,
  Output,
  Params as BankParams,
  SendEnabled,
  Supply,
  DenomUnit,
  Metadata,
} from './proto-interfaces/cosmos/bank/v1beta1/bank'

// Base
import { Coin, DecCoin } from './proto-interfaces/cosmos/base/v1beta1/coin'

// Circuit
import {
  MsgAuthorizeCircuitBreaker,
  MsgTripCircuitBreaker,
  MsgResetCircuitBreaker,
} from './proto-interfaces/cosmos/circuit/v1/tx'
import {
  Permissions,
  GenesisAccountPermissions,
  GenesisState as CircuitGenesisState,
} from './proto-interfaces/cosmos/circuit/v1/types'

// Consensus
import { MsgUpdateParams as ConsensusMsgUpdateParams } from './proto-interfaces/cosmos/consensus/v1/tx'

// Crisis
import {
  MsgVerifyInvariant,
  MsgUpdateParams as CrisisMsgUpdateParams,
} from './proto-interfaces/cosmos/crisis/v1beta1/tx'

// Crypto Multisig
import { LegacyAminoPubKey } from './proto-interfaces/cosmos/crypto/multisig/keys'
import { MultiSignature, CompactBitArray } from './proto-interfaces/cosmos/crypto/multisig/v1beta1/multisig'

// Crypto Ed25519
import { PubKey, PrivKey } from './proto-interfaces/cosmos/crypto/ed25519/keys'

// Distribution
import {
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
  MsgFundCommunityPool,
  MsgUpdateParams as DistributionMsgUpdateParams,
  MsgCommunityPoolSpend,
  MsgDepositValidatorRewardsPool,
} from './proto-interfaces/cosmos/distribution/v1beta1/tx'
import {
  Params as DistributionParams,
  ValidatorHistoricalRewards,
  ValidatorCurrentRewards,
  ValidatorAccumulatedCommission,
  ValidatorOutstandingRewards,
  ValidatorSlashEvent,
  ValidatorSlashEvents,
  FeePool,
  CommunityPoolSpendProposal,
  DelegatorStartingInfo,
  DelegationDelegatorReward,
  CommunityPoolSpendProposalWithDeposit,
} from './proto-interfaces/cosmos/distribution/v1beta1/distribution'

// Evidence
import { MsgSubmitEvidence } from './proto-interfaces/cosmos/evidence/v1beta1/tx'
import { Equivocation } from './proto-interfaces/cosmos/evidence/v1beta1/evidence'

// Fee Grant
import { MsgGrantAllowance, MsgRevokeAllowance } from './proto-interfaces/cosmos/feegrant/v1beta1/tx'
import {
  Grant as FeeGrantGrant,
  AllowedMsgAllowance,
  PeriodicAllowance,
  BasicAllowance,
} from './proto-interfaces/cosmos/feegrant/v1beta1/feegrant'

// Genutil
import { GenesisState } from './proto-interfaces/cosmos/genutil/v1beta1/genesis'

// Gov
import {
  MsgSubmitProposal,
  MsgExecLegacyContent,
  MsgVote,
  MsgVoteWeighted,
  MsgDeposit,
  MsgUpdateParams as GovMsgUpdateParams,
  MsgCancelProposal,
} from './proto-interfaces/cosmos/gov/v1/tx'
import {
  VoteOption,
  WeightedVoteOption,
  Deposit,
  Proposal,
  ProposalStatus,
  TallyResult,
  Vote,
  DepositParams,
  VotingParams,
  TallyParams,
  Params as GovParams,
} from './proto-interfaces/cosmos/gov/v1/gov'
// Gov (v1beta1)
import {
  MsgSubmitProposal as GovV1Beta1MsgSubmitProposal,
  MsgVote as GovV1Beta1MsgVote,
  MsgVoteWeighted as GovV1Beta1MsgVoteWeighted,
  MsgDeposit as GovV1Beta1MsgDeposit,
} from './proto-interfaces/cosmos/gov/v1beta1/tx'
import {
  VoteOption as GovV1Beta1VoteOption,
  WeightedVoteOption as GovV1Beta1WeightedVoteOption,
  TextProposal,
  Deposit as GovV1Beta1Deposit,
  Proposal as GovV1Beta1Proposal,
  ProposalStatus as GovV1Beta1ProposalStatus,
  TallyResult as GovV1Beta1TallyResult,
  Vote as GovV1Beta1Vote,
  DepositParams as GovV1Beta1DepositParams,
  VotingParams as GovV1Beta1VotingParams,
  TallyParams as GovV1Beta1TallyParams,
} from './proto-interfaces/cosmos/gov/v1beta1/gov'

// Group
import {
  Exec,
  MsgCreateGroup,
  MsgUpdateGroupMembers,
  MsgUpdateGroupAdmin,
  MsgUpdateGroupMetadata,
  MsgCreateGroupPolicy,
  MsgUpdateGroupPolicyAdmin,
  MsgCreateGroupWithPolicy,
  MsgUpdateGroupPolicyDecisionPolicy,
  MsgUpdateGroupPolicyMetadata,
  MsgSubmitProposal as GroupMsgSubmitProposal,
  MsgWithdrawProposal,
  MsgVote as GroupMsgVote,
  MsgExec as GroupMsgExec,
  MsgLeaveGroup,
} from './proto-interfaces/cosmos/group/v1/tx'
import {
  Member,
  MemberRequest,
  ThresholdDecisionPolicy,
  PercentageDecisionPolicy,
  DecisionPolicyWindows,
  VoteOption as GroupVoteOption,
  GroupInfo,
  GroupMember,
  GroupPolicyInfo,
  Proposal as GroupProposal,
  ProposalStatus as GroupProposalStatus,
  ProposalExecutorResult,
  TallyResult as GroupTallyResult,
  Vote as GroupVote,
} from './proto-interfaces/cosmos/group/v1/types'

// Mint
import { MsgUpdateParams as MintMsgUpdateParams } from './proto-interfaces/cosmos/mint/v1beta1/tx'
import { Minter, Params as MintParams } from './proto-interfaces/cosmos/mint/v1beta1/mint'

// NFT
import { MsgSend as NftMsgSend } from './proto-interfaces/cosmos/nft/v1beta1/tx'
import { Class as ClassCosmosNft, NFT } from './proto-interfaces/cosmos/nft/v1beta1/nft'

// Slashing
import { MsgUnjail, MsgUpdateParams as SlashingMsgUpdateParams } from './proto-interfaces/cosmos/slashing/v1beta1/tx'
import { ValidatorSigningInfo, Params as SlashingParams } from './proto-interfaces/cosmos/slashing/v1beta1/slashing'

// Staking
import {
  MsgCreateValidator,
  MsgEditValidator,
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
  MsgCancelUnbondingDelegation,
  MsgUpdateParams as StakingMsgUpdateParams,
} from './proto-interfaces/cosmos/staking/v1beta1/tx'
import {
  HistoricalInfo,
  CommissionRates,
  Commission,
  Description,
  Validator as ValidatorStacking,
  BondStatus,
  ValAddresses,
  DVPair,
  DVPairs,
  DVVTriplet,
  DVVTriplets,
  Delegation,
  UnbondingDelegation,
  UnbondingDelegationEntry,
  RedelegationEntry,
  Redelegation,
  Params as StakingParams,
  Pool,
  Infraction,
  ValidatorUpdates,
  DelegationResponse,
  RedelegationEntryResponse,
  RedelegationResponse,
} from './proto-interfaces/cosmos/staking/v1beta1/staking'

// Tendermint ABCI Types
import {
  Request,
  RequestEcho,
  RequestFlush,
  RequestInfo,
  RequestInitChain,
  RequestQuery,
  CheckTxType,
  RequestCheckTx,
  RequestCommit,
  RequestListSnapshots,
  RequestOfferSnapshot,
  RequestLoadSnapshotChunk,
  RequestApplySnapshotChunk,
  RequestPrepareProposal,
  RequestProcessProposal,
  RequestExtendVote,
  RequestVerifyVoteExtension,
  RequestFinalizeBlock,
  CommitInfo,
  ExtendedCommitInfo,
  Event,
  EventAttribute,
  ExecTxResult,
  TxResult,
  Validator as ValidatorTypes,
  ValidatorUpdate,
  VoteInfo,
  ExtendedVoteInfo,
  Misbehavior,
  MisbehaviorType,
  Snapshot,
} from './proto-interfaces/cosmos/tendermint/abci/types'

// Tendermint Crypto Keys
import { PublicKey } from './proto-interfaces/cosmos/tendermint/crypto/keys'

// Tendermint Crypto Proof
import { Proof, ValueOp, DominoOp, ProofOp, ProofOps } from './proto-interfaces/cosmos/tendermint/crypto/proof'

// Tendermint Bits Types
import { BitArray } from './proto-interfaces/cosmos/tendermint/libs/bits/types'

// Tendermint P2P Types
import {
  NetAddress,
  ProtocolVersion,
  DefaultNodeInfo,
  DefaultNodeInfoOther,
} from './proto-interfaces/cosmos/tendermint/p2p/types'

// Tendermint Types Types
import {
  BlockIDFlag,
  SimpleValidator,
  ValidatorSet,
  Validator,
} from './proto-interfaces/cosmos/tendermint/types/validator'

// Tendermint Types
import { Block } from './proto-interfaces/cosmos/tendermint/types/block'

// Tendermint Evidence Types
import {
  Evidence,
  DuplicateVoteEvidence,
  LightClientAttackEvidence,
  EvidenceList,
} from './proto-interfaces/cosmos/tendermint/types/evidence'

// Tendermint Params Types
import {
  ConsensusParams,
  BlockParams,
  EvidenceParams,
  ValidatorParams,
  VersionParams,
  HashedParams,
  ABCIParams,
} from './proto-interfaces/cosmos/tendermint/types/params'

// Tendermint Version Types
import { App, Consensus } from './proto-interfaces/cosmos/tendermint/version/types'

// Tx
import {
  Tx,
  TxRaw,
  SignDoc,
  SignDocDirectAux,
  TxBody,
  AuthInfo,
  SignerInfo,
  ModeInfo,
  Fee,
  Tip,
  AuxSignerData,
} from './proto-interfaces/cosmos/tx/v1beta1/tx'

// Tx Signing
import {
  SignMode,
  SignatureDescriptors,
  SignatureDescriptor,
  SignatureDescriptor_Data,
  SignatureDescriptor_Data_Single,
  SignatureDescriptor_Data_Multi,
} from './proto-interfaces/cosmos/tx/signing/v1beta1/signing'

// Upgrade
import {
  SoftwareUpgradeProposal,
  CancelSoftwareUpgradeProposal,
  ModuleVersion,
} from './proto-interfaces/cosmos/upgrade/v1beta1/upgrade'

// Vesting
import {
  MsgCreateVestingAccount,
  MsgCreatePermanentLockedAccount,
  MsgCreatePeriodicVestingAccount,
} from './proto-interfaces/cosmos/vesting/v1beta1/tx'
import {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  Period,
  PeriodicVestingAccount,
  PermanentLockedAccount,
} from './proto-interfaces/cosmos/vesting/v1beta1/vesting'
// Wasm
import {
  MsgStoreCode,
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgExecuteContract,
  MsgMigrateContract,
  MsgUpdateAdmin,
  MsgClearAdmin,
  MsgUpdateInstantiateConfig,
  MsgUpdateParams as WasmMsgUpdateParams,
  MsgSudoContract,
  MsgPinCodes,
  MsgUnpinCodes,
  MsgStoreAndInstantiateContract,
  MsgAddCodeUploadParamsAddresses,
  MsgRemoveCodeUploadParamsAddresses,
  MsgStoreAndMigrateContract,
} from './proto-interfaces/cosmwasm/wasm/v1/tx'
import {
  AccessType,
  AccessTypeParam,
  AccessConfig,
  Params as WasmParams,
  CodeInfo,
  ContractInfo,
  ContractCodeHistoryOperationType,
  ContractCodeHistoryEntry,
  AbsoluteTxPosition,
  Model,
} from './proto-interfaces/cosmwasm/wasm/v1/types'

// IBC Applications Fee
import {
  MsgRegisterPayee,
  MsgRegisterCounterpartyPayee,
  MsgPayPacketFee,
  MsgPayPacketFeeAsync,
} from './proto-interfaces/ibc/applications/fee/v1/tx'
import {
  Fee as FeeIbc,
  PacketFee,
  PacketFees,
  IdentifiedPacketFees,
} from './proto-interfaces/ibc/applications/fee/v1/fee'

// IBC Applications Fee Acknowledgement
import { IncentivizedAcknowledgement } from './proto-interfaces/ibc/applications/fee/v1/ack'

// IBC Applications Interchain Accounts Controller
import {
  MsgRegisterInterchainAccount,
  MsgSendTx,
  MsgUpdateParams as InterchainAccountsControllerMsgUpdateParams,
} from './proto-interfaces/ibc/applications/interchain_accounts/controller/v1/tx'
import { Params as InterchainAccountsControllerParams } from './proto-interfaces/ibc/applications/interchain_accounts/controller/v1/controller'

// IBC Applications Interchain Accounts V1 Packet
import {
  Type,
  InterchainAccountPacketData,
  CosmosTx,
} from './proto-interfaces/ibc/applications/interchain_accounts/v1/packet'

// IBC Applications Interchain Accounts Host
import { MsgUpdateParams as InterchainAccountsHostMsgUpdateParams } from './proto-interfaces/ibc/applications/interchain_accounts/host/v1/tx'
import { Params as InterchainAccountsHostParams } from './proto-interfaces/ibc/applications/interchain_accounts/host/v1/host'

// IBC Applications Transfer
import {
  MsgTransfer,
  MsgUpdateParams as TransferMsgUpdateParams,
} from './proto-interfaces/ibc/applications/transfer/v1/tx'
import { DenomTrace, Params as TransferParams } from './proto-interfaces/ibc/applications/transfer/v1/transfer'
import { Allocation, TransferAuthorization } from './proto-interfaces/ibc/applications/transfer/v1/authz'

// IBC Applications Transfer V2 Packet
import { FungibleTokenPacketData } from './proto-interfaces/ibc/applications/transfer/v2/packet'

// IBC Core Channel
import {
  ResponseResultType,
  MsgChannelOpenInit,
  MsgChannelOpenTry,
  MsgChannelOpenAck,
  MsgChannelOpenConfirm,
  MsgChannelCloseInit,
  MsgChannelCloseConfirm,
  MsgRecvPacket,
  MsgTimeout,
  MsgTimeoutOnClose,
  MsgAcknowledgement,
} from './proto-interfaces/ibc/core/channel/v1/tx'
import {
  Channel,
  IdentifiedChannel,
  State,
  Order,
  Counterparty,
  Packet,
  PacketState,
  PacketId,
  Acknowledgement,
  Timeout,
} from './proto-interfaces/ibc/core/channel/v1/channel'

// IBC Core Client
import {
  MsgCreateClient,
  MsgUpdateClient,
  MsgUpgradeClient,
  MsgSubmitMisbehaviour,
  MsgRecoverClient,
  MsgIBCSoftwareUpgrade,
  MsgUpdateParams as CoreClientMsgUpdateParams,
} from './proto-interfaces/ibc/core/client/v1/tx'
import {
  IdentifiedClientState,
  ConsensusStateWithHeight,
  ClientConsensusStates,
  Height,
  Params as CoreClientParams,
  ClientUpdateProposal,
  UpgradeProposal,
} from './proto-interfaces/ibc/core/client/v1/client'

// IBC Core Connection
import {
  MsgConnectionOpenInit,
  MsgConnectionOpenTry,
  MsgConnectionOpenAck,
  MsgConnectionOpenConfirm,
  MsgUpdateParams as CoreConnectionMsgUpdateParams,
} from './proto-interfaces/ibc/core/connection/v1/tx'
import {
  ConnectionEnd,
  IdentifiedConnection,
  State as CoreConnectionState,
  Counterparty as CoreConnectionCounterparty,
  ClientPaths,
  ConnectionPaths,
  Version,
  Params as CoreConnectionParams,
} from './proto-interfaces/ibc/core/connection/v1/connection'

// IBC Core Commitment
import { MerklePath, MerkleProof } from './proto-interfaces/ibc/core/commitment/v1/commitment'

// IBC Light Clients Localhost V2
import { ClientState as LightClientsLocalhostV2ClientState } from './proto-interfaces/ibc/lightclients/localhost/v2/localhost'

// IBC Light Clients Solomachine V2
import {
  ClientState as LightClientsSolomachineV2ClientState,
  ConsensusState,
  Header as LightClientsSolomachineV2Header,
  Misbehaviour as LightClientsSolomachineV2Misbehaviour,
  SignatureAndData as LightClientsSolomachineV2SignatureAndData,
  TimestampedSignatureData as LightClientsSolomachineV2TimestampedSignatureData,
  SignBytes as LightClientsSolomachineV2SignBytes,
  HeaderData as LightClientsSolomachineV2HeaderData,
  Header,

} from './proto-interfaces/ibc/lightclients/solomachine/v2/solomachine'

// IBC Light Clients Tendermint V1
import {
  ClientState,
  ConsensusState as LightClientsTendermintV1ConsensusState,
  Misbehaviour,
  Header as LightClientsTendermintV1Header,
  Fraction,
} from './proto-interfaces/ibc/lightclients/tendermint/v1/tendermint'

// Google Protobuf Descriptor
import {
  FileDescriptorProto,
  DescriptorProto,
  FieldDescriptorProto,
  OneofDescriptorProto,
  EnumDescriptorProto,
  EnumValueDescriptorProto,
  ServiceDescriptorProto,
  MethodDescriptorProto,
  FileOptions,
  MessageOptions,
  FieldOptions,
  OneofOptions,
  EnumOptions,
  EnumValueOptions,
  ServiceOptions,
  MethodOptions,
  UninterpretedOption,
  SourceCodeInfo,
  GeneratedCodeInfo,
} from './proto-interfaces/google/protobuf/descriptor'

// Google Protobuf Any
import { Any } from './proto-interfaces/google/protobuf/any'

// Google Protobuf Timestamp
import { Timestamp } from './proto-interfaces/google/protobuf/timestamp'
import { ExtendedCommit, ExtendedCommitSig } from './proto-interfaces/cosmos/tendermint/types/types'
import {
  SignedMsgType,
  PartSetHeader,
  Part,
  BlockID,
  Data,
  Commit,
  CommitSig,
  SignedHeader,
  LightBlock,
  BlockMeta,
  TxProof,
} from './proto-interfaces/tendermint/types/types'
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

import { MsgSend } from './proto-interfaces/coreum/nft/v1beta1/tx'

import { Class, NFT as NFTcoreum } from './proto-interfaces/coreum/nft/v1beta1/nft'

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
  MsgUpdateParams as MsgUpdateParamsFt,
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

import { MsgUpdateParams as MsgUpdateParamsFee } from './proto-interfaces/coreum/feemodel/v1/tx'

export type CrisisMsgUpdateParamsMessage = CosmosMessage<CrisisMsgUpdateParams>

export type BaseAccountMessage = CosmosMessage<BaseAccount>
export type ModuleAccountMessage = CosmosMessage<ModuleAccount>
export type ModuleCredentialMessage = CosmosMessage<ModuleCredential>
export type WasmParamsMessage = CosmosMessage<WasmParams>

export type MsgGrantMessage = CosmosMessage<MsgGrant>
export type GroupMsgExecMessage = CosmosMessage<GroupMsgExec>
export type MsgRevokeMessage = CosmosMessage<MsgRevoke>

export type FeeGrantGrantMessage = CosmosMessage<FeeGrantGrant>
export type GenericAuthorizationMessage = CosmosMessage<GenericAuthorization>
export type GrantAuthorizationMessage = CosmosMessage<GrantAuthorization>
export type GrantQueueItemMessage = CosmosMessage<GrantQueueItem>

export type NftMsgSendMessage = CosmosMessage<NftMsgSend>
export type MsgMultiSendMessage = CosmosMessage<MsgMultiSend>
export type DistributionMsgUpdateParamsMessage = CosmosMessage<DistributionMsgUpdateParams>
export type MsgSetSendEnabledMessage = CosmosMessage<MsgSetSendEnabled>
export type MsgBurnBankMessage = CosmosMessage<MsgBurnBank>

export type InputMessage = CosmosMessage<Input>
export type OutputMessage = CosmosMessage<Output>
export type BankParamsMessage = CosmosMessage<BankParams>
export type SendEnabledMessage = CosmosMessage<SendEnabled>
export type SupplyMessage = CosmosMessage<Supply>
export type DenomUnitMessage = CosmosMessage<DenomUnit>
export type MetadataMessage = CosmosMessage<Metadata>

export type CoinMessage = CosmosMessage<Coin>
export type DecCoinMessage = CosmosMessage<DecCoin>

export type MsgAuthorizeCircuitBreakerMessage = CosmosMessage<MsgAuthorizeCircuitBreaker>
export type MsgTripCircuitBreakerMessage = CosmosMessage<MsgTripCircuitBreaker>
export type MsgResetCircuitBreakerMessage = CosmosMessage<MsgResetCircuitBreaker>

export type PermissionsMessage = CosmosMessage<Permissions>
// export type LevelMessage = CosmosMessage<Level>
export type GenesisAccountPermissionsMessage = CosmosMessage<GenesisAccountPermissions>
export type CircuitGenesisStateMessage = CosmosMessage<CircuitGenesisState>

export type GovMsgUpdateParamsMessage = CosmosMessage<GovMsgUpdateParams>

export type MsgVerifyInvariantMessage = CosmosMessage<MsgVerifyInvariant>
export type MintMsgUpdateParamsMessage = CosmosMessage<MintMsgUpdateParams>

export type LegacyAminoPubKeyMessage = CosmosMessage<LegacyAminoPubKey>

export type MultiSignatureMessage = CosmosMessage<MultiSignature>
export type CompactBitArrayMessage = CosmosMessage<CompactBitArray>

export type PubKeyMessage = CosmosMessage<PubKey>
export type PrivKeyMessage = CosmosMessage<PrivKey>

export type MsgSetWithdrawAddressMessage = CosmosMessage<MsgSetWithdrawAddress>
export type MsgWithdrawDelegatorRewardMessage = CosmosMessage<MsgWithdrawDelegatorReward>
export type MsgWithdrawValidatorCommissionMessage = CosmosMessage<MsgWithdrawValidatorCommission>
export type MsgFundCommunityPoolMessage = CosmosMessage<MsgFundCommunityPool>
export type InterchainAccountsControllerMsgUpdateParamsMessage =
  CosmosMessage<InterchainAccountsControllerMsgUpdateParams>
export type MsgCommunityPoolSpendMessage = CosmosMessage<MsgCommunityPoolSpend>
export type MsgDepositValidatorRewardsPoolMessage = CosmosMessage<MsgDepositValidatorRewardsPool>

export type AuthParamsMessage = CosmosMessage<AuthParams>
export type ValidatorHistoricalRewardsMessage = CosmosMessage<ValidatorHistoricalRewards>
export type ValidatorCurrentRewardsMessage = CosmosMessage<ValidatorCurrentRewards>
export type ValidatorAccumulatedCommissionMessage = CosmosMessage<ValidatorAccumulatedCommission>
export type ValidatorOutstandingRewardsMessage = CosmosMessage<ValidatorOutstandingRewards>
export type ValidatorSlashEventMessage = CosmosMessage<ValidatorSlashEvent>
export type ValidatorSlashEventsMessage = CosmosMessage<ValidatorSlashEvents>
export type FeePoolMessage = CosmosMessage<FeePool>
export type CommunityPoolSpendProposalMessage = CosmosMessage<CommunityPoolSpendProposal>
export type DelegatorStartingInfoMessage = CosmosMessage<DelegatorStartingInfo>
export type DelegationDelegatorRewardMessage = CosmosMessage<DelegationDelegatorReward>
export type CommunityPoolSpendProposalWithDepositMessage = CosmosMessage<CommunityPoolSpendProposalWithDeposit>

export type MsgSubmitEvidenceMessage = CosmosMessage<MsgSubmitEvidence>

export type EquivocationMessage = CosmosMessage<Equivocation>

export type MsgGrantAllowanceMessage = CosmosMessage<MsgGrantAllowance>
export type MsgRevokeAllowanceMessage = CosmosMessage<MsgRevokeAllowance>

export type GrantMessage = CosmosMessage<Grant>
export type AllowedMsgAllowanceMessage = CosmosMessage<AllowedMsgAllowance>
export type PeriodicAllowanceMessage = CosmosMessage<PeriodicAllowance>
export type BasicAllowanceMessage = CosmosMessage<BasicAllowance>

export type GenesisStateMessage = CosmosMessage<GenesisState>

export type GovV1Beta1MsgSubmitProposalMessage = CosmosMessage<GovV1Beta1MsgSubmitProposal>
export type MsgExecLegacyContentMessage = CosmosMessage<MsgExecLegacyContent>
export type MsgVoteMessage = CosmosMessage<MsgVote>
export type GovV1Beta1MsgVoteWeightedMessage = CosmosMessage<GovV1Beta1MsgVoteWeighted>
export type GovV1Beta1MsgDepositMessage = CosmosMessage<GovV1Beta1MsgDeposit>
export type SlashingMsgUpdateParamsMessage = CosmosMessage<SlashingMsgUpdateParams>
export type MsgCancelProposalMessage = CosmosMessage<MsgCancelProposal>

export type GroupVoteOptionMessage = CosmosMessage<GroupVoteOption>
export type GovV1Beta1WeightedVoteOptionMessage = CosmosMessage<GovV1Beta1WeightedVoteOption>
export type GovV1Beta1DepositMessage = CosmosMessage<GovV1Beta1Deposit>
export type GroupProposalMessage = CosmosMessage<GroupProposal>
export type GroupProposalStatusMessage = CosmosMessage<GroupProposalStatus>
export type GovV1Beta1TallyResultMessage = CosmosMessage<GovV1Beta1TallyResult>
export type GroupVoteMessage = CosmosMessage<GroupVote>
export type GovV1Beta1DepositParamsMessage = CosmosMessage<GovV1Beta1DepositParams>
export type GovV1Beta1VotingParamsMessage = CosmosMessage<GovV1Beta1VotingParams>
export type GovV1Beta1TallyParamsMessage = CosmosMessage<GovV1Beta1TallyParams>
export type DistributionParamsMessage = CosmosMessage<DistributionParams>

export type GroupMsgSubmitProposalMessage = CosmosMessage<GroupMsgSubmitProposal>
export type GovV1Beta1MsgVoteMessage = CosmosMessage<GovV1Beta1MsgVote>
export type MsgVoteWeightedMessage = CosmosMessage<MsgVoteWeighted>
export type MsgDepositMessage = CosmosMessage<MsgDeposit>

export type GovV1Beta1VoteOptionMessage = CosmosMessage<GovV1Beta1VoteOption>
export type WeightedVoteOptionMessage = CosmosMessage<WeightedVoteOption>
export type TextProposalMessage = CosmosMessage<TextProposal>
export type DepositMessage = CosmosMessage<Deposit>
// export type ProposalMessage = CosmosMessage<Proposal>
export type GovV1Beta1ProposalStatusMessage = CosmosMessage<GovV1Beta1ProposalStatus>
export type GroupTallyResultMessage = CosmosMessage<GroupTallyResult>
export type GovV1Beta1VoteMessage = CosmosMessage<GovV1Beta1Vote>
export type DepositParamsMessage = CosmosMessage<DepositParams>
export type VotingParamsMessage = CosmosMessage<VotingParams>
export type TallyParamsMessage = CosmosMessage<TallyParams>

export type ExecMessage = CosmosMessage<Exec>
export type MsgCreateGroupMessage = CosmosMessage<MsgCreateGroup>
export type MsgUpdateGroupMembersMessage = CosmosMessage<MsgUpdateGroupMembers>
export type MsgUpdateGroupAdminMessage = CosmosMessage<MsgUpdateGroupAdmin>
export type MsgUpdateGroupMetadataMessage = CosmosMessage<MsgUpdateGroupMetadata>
export type MsgCreateGroupPolicyMessage = CosmosMessage<MsgCreateGroupPolicy>
export type MsgUpdateGroupPolicyAdminMessage = CosmosMessage<MsgUpdateGroupPolicyAdmin>
export type MsgCreateGroupWithPolicyMessage = CosmosMessage<MsgCreateGroupWithPolicy>
export type MsgUpdateGroupPolicyDecisionPolicyMessage = CosmosMessage<MsgUpdateGroupPolicyDecisionPolicy>
export type MsgUpdateGroupPolicyMetadataMessage = CosmosMessage<MsgUpdateGroupPolicyMetadata>
export type MsgSubmitProposalMessage = CosmosMessage<MsgSubmitProposal>
export type MsgWithdrawProposalMessage = CosmosMessage<MsgWithdrawProposal>
export type GroupMsgVoteMessage = CosmosMessage<GroupMsgVote>
export type MsgExecMessage = CosmosMessage<MsgExec>
export type MsgLeaveGroupMessage = CosmosMessage<MsgLeaveGroup>

export type MemberMessage = CosmosMessage<Member>
export type MemberRequestMessage = CosmosMessage<MemberRequest>
export type ThresholdDecisionPolicyMessage = CosmosMessage<ThresholdDecisionPolicy>
export type PercentageDecisionPolicyMessage = CosmosMessage<PercentageDecisionPolicy>
export type DecisionPolicyWindowsMessage = CosmosMessage<DecisionPolicyWindows>
export type VoteOptionMessage = CosmosMessage<VoteOption>
export type GroupInfoMessage = CosmosMessage<GroupInfo>
export type GroupMemberMessage = CosmosMessage<GroupMember>
export type GroupPolicyInfoMessage = CosmosMessage<GroupPolicyInfo>
export type GovV1Beta1ProposalMessage = CosmosMessage<GovV1Beta1Proposal>
export type ProposalStatusMessage = CosmosMessage<ProposalStatus>
export type ProposalExecutorResultMessage = CosmosMessage<ProposalExecutorResult>
export type TallyResultMessage = CosmosMessage<TallyResult>
// export type VoteMessage = CosmosMessage<Vote>

export type InterchainAccountsHostMsgUpdateParamsMessage = CosmosMessage<InterchainAccountsHostMsgUpdateParams>

export type MinterMessage = CosmosMessage<Minter>
export type GovParamsMessage = CosmosMessage<GovParams>

export type MsgSendBankMessage = CosmosMessage<MsgSendBank>

export type ClassCosmosNftMessage = CosmosMessage<ClassCosmosNft>
export type NFTcoreumMessage = CosmosMessage<NFTcoreum>

export type MsgUnjailMessage = CosmosMessage<MsgUnjail>
export type StakingMsgUpdateParamsMessage = CosmosMessage<StakingMsgUpdateParams>

export type ValidatorSigningInfoMessage = CosmosMessage<ValidatorSigningInfo>
export type SlashingParamsMessage = CosmosMessage<SlashingParams>

export type MsgCreateValidatorMessage = CosmosMessage<MsgCreateValidator>
export type MsgEditValidatorMessage = CosmosMessage<MsgEditValidator>
export type MsgDelegateMessage = CosmosMessage<MsgDelegate>
export type MsgBeginRedelegateMessage = CosmosMessage<MsgBeginRedelegate>
export type MsgUndelegateMessage = CosmosMessage<MsgUndelegate>
export type MsgCancelUnbondingDelegationMessage = CosmosMessage<MsgCancelUnbondingDelegation>
export type WasmMsgUpdateParamsMessage = CosmosMessage<WasmMsgUpdateParams>

export type HistoricalInfoMessage = CosmosMessage<HistoricalInfo>
export type CommissionRatesMessage = CosmosMessage<CommissionRates>
export type CommissionMessage = CosmosMessage<Commission>
export type DescriptionMessage = CosmosMessage<Description>
export type ValidatorStackingMessage = CosmosMessage<ValidatorStacking>
export type BondStatusMessage = CosmosMessage<BondStatus>
export type ValAddressesMessage = CosmosMessage<ValAddresses>
export type DVPairMessage = CosmosMessage<DVPair>
export type DVPairsMessage = CosmosMessage<DVPairs>
export type DVVTripletMessage = CosmosMessage<DVVTriplet>
export type DVVTripletsMessage = CosmosMessage<DVVTriplets>
export type DelegationMessage = CosmosMessage<Delegation>
export type UnbondingDelegationMessage = CosmosMessage<UnbondingDelegation>
export type UnbondingDelegationEntryMessage = CosmosMessage<UnbondingDelegationEntry>
export type RedelegationEntryMessage = CosmosMessage<RedelegationEntry>
export type RedelegationMessage = CosmosMessage<Redelegation>
export type StakingParamsMessage = CosmosMessage<StakingParams>
export type DelegationResponseMessage = CosmosMessage<DelegationResponse>
export type RedelegationEntryResponseMessage = CosmosMessage<RedelegationEntryResponse>
export type RedelegationResponseMessage = CosmosMessage<RedelegationResponse>
export type PoolMessage = CosmosMessage<Pool>
export type InfractionMessage = CosmosMessage<Infraction>
export type ValidatorUpdatesMessage = CosmosMessage<ValidatorUpdates>

export type RequestMessage = CosmosMessage<Request>
export type RequestEchoMessage = CosmosMessage<RequestEcho>
export type RequestFlushMessage = CosmosMessage<RequestFlush>
export type RequestInfoMessage = CosmosMessage<RequestInfo>
export type RequestInitChainMessage = CosmosMessage<RequestInitChain>
export type RequestQueryMessage = CosmosMessage<RequestQuery>
export type CheckTxTypeMessage = CosmosMessage<CheckTxType>
export type RequestCheckTxMessage = CosmosMessage<RequestCheckTx>
export type RequestCommitMessage = CosmosMessage<RequestCommit>
export type RequestListSnapshotsMessage = CosmosMessage<RequestListSnapshots>
export type RequestOfferSnapshotMessage = CosmosMessage<RequestOfferSnapshot>
export type RequestLoadSnapshotChunkMessage = CosmosMessage<RequestLoadSnapshotChunk>
export type RequestApplySnapshotChunkMessage = CosmosMessage<RequestApplySnapshotChunk>
export type RequestPrepareProposalMessage = CosmosMessage<RequestPrepareProposal>
export type RequestProcessProposalMessage = CosmosMessage<RequestProcessProposal>
export type RequestExtendVoteMessage = CosmosMessage<RequestExtendVote>
export type RequestVerifyVoteExtensionMessage = CosmosMessage<RequestVerifyVoteExtension>
export type RequestFinalizeBlockMessage = CosmosMessage<RequestFinalizeBlock>
export type CommitInfoMessage = CosmosMessage<CommitInfo>
export type ExtendedCommitInfoMessage = CosmosMessage<ExtendedCommitInfo>
export type EventMessage = CosmosMessage<Event>
export type EventAttributeMessage = CosmosMessage<EventAttribute>
export type ExecTxResultMessage = CosmosMessage<ExecTxResult>
export type TxResultMessage = CosmosMessage<TxResult>
export type ValidatorTypesMessage = CosmosMessage<ValidatorTypes>
export type ValidatorUpdateMessage = CosmosMessage<ValidatorUpdate>
export type VoteInfoMessage = CosmosMessage<VoteInfo>
export type ExtendedVoteInfoMessage = CosmosMessage<ExtendedVoteInfo>
export type MisbehaviorMessage = CosmosMessage<Misbehavior>
export type MisbehaviorTypeMessage = CosmosMessage<MisbehaviorType>
export type SnapshotMessage = CosmosMessage<Snapshot>

export type PublicKeyMessage = CosmosMessage<PublicKey>

export type ProofMessage = CosmosMessage<Proof>
export type ValueOpMessage = CosmosMessage<ValueOp>
export type DominoOpMessage = CosmosMessage<DominoOp>
export type ProofOpMessage = CosmosMessage<ProofOp>
export type ProofOpsMessage = CosmosMessage<ProofOps>

export type BitArrayMessage = CosmosMessage<BitArray>

export type NetAddressMessage = CosmosMessage<NetAddress>
export type ProtocolVersionMessage = CosmosMessage<ProtocolVersion>
export type DefaultNodeInfoMessage = CosmosMessage<DefaultNodeInfo>
export type DefaultNodeInfoOtherMessage = CosmosMessage<DefaultNodeInfoOther>

export type SignedMsgTypeMessage = CosmosMessage<SignedMsgType>
export type PartSetHeaderMessage = CosmosMessage<PartSetHeader>
export type PartMessage = CosmosMessage<Part>
export type BlockIDMessage = CosmosMessage<BlockID>
export type LightClientsTendermintV1HeaderMessage = CosmosMessage<LightClientsTendermintV1Header>
export type DataMessage = CosmosMessage<Data>
export type VoteMessage = CosmosMessage<Vote>
export type CommitMessage = CosmosMessage<Commit>
export type CommitSigMessage = CosmosMessage<CommitSig>
export type ExtendedCommitMessage = CosmosMessage<ExtendedCommit>
export type ExtendedCommitSigMessage = CosmosMessage<ExtendedCommitSig>
export type ProposalMessage = CosmosMessage<Proposal>
export type SignedHeaderMessage = CosmosMessage<SignedHeader>
export type LightBlockMessage = CosmosMessage<LightBlock>
export type BlockMetaMessage = CosmosMessage<BlockMeta>
export type TxProofMessage = CosmosMessage<TxProof>

export type BlockIDFlagMessage = CosmosMessage<BlockIDFlag>
export type SimpleValidatorMessage = CosmosMessage<SimpleValidator>
export type ValidatorSetMessage = CosmosMessage<ValidatorSet>
export type ValidatorMessage = CosmosMessage<Validator>

export type BlockMessage = CosmosMessage<Block>

export type EvidenceMessage = CosmosMessage<Evidence>
export type DuplicateVoteEvidenceMessage = CosmosMessage<DuplicateVoteEvidence>
export type LightClientAttackEvidenceMessage = CosmosMessage<LightClientAttackEvidence>
export type EvidenceListMessage = CosmosMessage<EvidenceList>

export type ConsensusParamsMessage = CosmosMessage<ConsensusParams>
export type BlockParamsMessage = CosmosMessage<BlockParams>
export type EvidenceParamsMessage = CosmosMessage<EvidenceParams>
export type ValidatorParamsMessage = CosmosMessage<ValidatorParams>
export type VersionParamsMessage = CosmosMessage<VersionParams>
export type HashedParamsMessage = CosmosMessage<HashedParams>
export type ABCIParamsMessage = CosmosMessage<ABCIParams>

export type AppMessage = CosmosMessage<App>
export type ConsensusMessage = CosmosMessage<Consensus>

export type TxMessage = CosmosMessage<Tx>
export type TxRawMessage = CosmosMessage<TxRaw>
export type SignDocMessage = CosmosMessage<SignDoc>
export type SignDocDirectAuxMessage = CosmosMessage<SignDocDirectAux>
export type TxBodyMessage = CosmosMessage<TxBody>
export type AuthInfoMessage = CosmosMessage<AuthInfo>
export type SignerInfoMessage = CosmosMessage<SignerInfo>
export type ModeInfoMessage = CosmosMessage<ModeInfo>
export type FeeIbcMessage = CosmosMessage<FeeIbc>
export type TipMessage = CosmosMessage<Tip>
export type AuxSignerDataMessage = CosmosMessage<AuxSignerData>

export type SignModeMessage = CosmosMessage<SignMode>
export type SignatureDescriptorsMessage = CosmosMessage<SignatureDescriptors>
export type SignatureDescriptorMessage = CosmosMessage<SignatureDescriptor>

export type SoftwareUpgradeProposalMessage = CosmosMessage<SoftwareUpgradeProposal>
export type CancelSoftwareUpgradeProposalMessage = CosmosMessage<CancelSoftwareUpgradeProposal>
export type ModuleVersionMessage = CosmosMessage<ModuleVersion>

export type MsgCreateVestingAccountMessage = CosmosMessage<MsgCreateVestingAccount>
export type MsgCreatePermanentLockedAccountMessage = CosmosMessage<MsgCreatePermanentLockedAccount>
export type MsgCreatePeriodicVestingAccountMessage = CosmosMessage<MsgCreatePeriodicVestingAccount>

export type BaseVestingAccountMessage = CosmosMessage<BaseVestingAccount>
export type ContinuousVestingAccountMessage = CosmosMessage<ContinuousVestingAccount>
export type DelayedVestingAccountMessage = CosmosMessage<DelayedVestingAccount>
export type PeriodMessage = CosmosMessage<Period>
export type PeriodicVestingAccountMessage = CosmosMessage<PeriodicVestingAccount>
export type PermanentLockedAccountMessage = CosmosMessage<PermanentLockedAccount>

export type MsgStoreCodeMessage = CosmosMessage<MsgStoreCode>
export type MsgInstantiateContractMessage = CosmosMessage<MsgInstantiateContract>
export type MsgInstantiateContract2Message = CosmosMessage<MsgInstantiateContract2>
export type MsgExecuteContractMessage = CosmosMessage<MsgExecuteContract>
export type MsgMigrateContractMessage = CosmosMessage<MsgMigrateContract>
export type MsgUpdateAdminMessage = CosmosMessage<MsgUpdateAdmin>
export type MsgClearAdminMessage = CosmosMessage<MsgClearAdmin>
export type MsgUpdateInstantiateConfigMessage = CosmosMessage<MsgUpdateInstantiateConfig>
export type MsgUpdateParamsMessage = CosmosMessage<CoreConnectionMsgUpdateParams>
export type MsgSudoContractMessage = CosmosMessage<MsgSudoContract>
export type MsgPinCodesMessage = CosmosMessage<MsgPinCodes>
export type MsgUnpinCodesMessage = CosmosMessage<MsgUnpinCodes>
export type MsgStoreAndInstantiateContractMessage = CosmosMessage<MsgStoreAndInstantiateContract>
export type MsgAddCodeUploadParamsAddressesMessage = CosmosMessage<MsgAddCodeUploadParamsAddresses>
export type MsgRemoveCodeUploadParamsAddressesMessage = CosmosMessage<MsgRemoveCodeUploadParamsAddresses>
export type MsgStoreAndMigrateContractMessage = CosmosMessage<MsgStoreAndMigrateContract>

export type AccessTypeMessage = CosmosMessage<AccessType>
export type AccessTypeParamMessage = CosmosMessage<AccessTypeParam>
export type AccessConfigMessage = CosmosMessage<AccessConfig>
export type InterchainAccountsHostParamsMessage = CosmosMessage<InterchainAccountsHostParams>
export type CodeInfoMessage = CosmosMessage<CodeInfo>
export type ContractInfoMessage = CosmosMessage<ContractInfo>
export type ContractCodeHistoryOperationTypeMessage = CosmosMessage<ContractCodeHistoryOperationType>
export type ContractCodeHistoryEntryMessage = CosmosMessage<ContractCodeHistoryEntry>
export type AbsoluteTxPositionMessage = CosmosMessage<AbsoluteTxPosition>
export type ModelMessage = CosmosMessage<Model>

export type MsgRegisterPayeeMessage = CosmosMessage<MsgRegisterPayee>
export type MsgRegisterCounterpartyPayeeMessage = CosmosMessage<MsgRegisterCounterpartyPayee>
export type MsgPayPacketFeeMessage = CosmosMessage<MsgPayPacketFee>
export type MsgPayPacketFeeAsyncMessage = CosmosMessage<MsgPayPacketFeeAsync>

export type FeeMessage = CosmosMessage<Fee>
export type PacketFeeMessage = CosmosMessage<PacketFee>
export type PacketFeesMessage = CosmosMessage<PacketFees>
export type IdentifiedPacketFeesMessage = CosmosMessage<IdentifiedPacketFees>

export type IncentivizedAcknowledgementMessage = CosmosMessage<IncentivizedAcknowledgement>

export type MsgRegisterInterchainAccountMessage = CosmosMessage<MsgRegisterInterchainAccount>
export type MsgSendTxMessage = CosmosMessage<MsgSendTx>
export type TransferMsgUpdateParamsMessage = CosmosMessage<TransferMsgUpdateParams>

export type MintParamsMessage = CosmosMessage<MintParams>

export type TypeMessage = CosmosMessage<Type>
export type InterchainAccountPacketDataMessage = CosmosMessage<InterchainAccountPacketData>
export type CosmosTxMessage = CosmosMessage<CosmosTx>

export type CoreClientMsgUpdateParamsMessage = CosmosMessage<CoreClientMsgUpdateParams>

export type InterchainAccountsControllerParamsMessage = CosmosMessage<InterchainAccountsControllerParams>

export type MsgTransferMessage = CosmosMessage<MsgTransfer>
export type ConsensusMsgUpdateParamsMessage = CosmosMessage<ConsensusMsgUpdateParams>

export type DenomTraceMessage = CosmosMessage<DenomTrace>
export type CoreConnectionParamsMessage = CosmosMessage<CoreConnectionParams>

export type AllocationMessage = CosmosMessage<Allocation>
export type TransferAuthorizationMessage = CosmosMessage<TransferAuthorization>

export type FungibleTokenPacketDataMessage = CosmosMessage<FungibleTokenPacketData>

export type ResponseResultTypeMessage = CosmosMessage<ResponseResultType>
export type MsgChannelOpenInitMessage = CosmosMessage<MsgChannelOpenInit>
export type MsgChannelOpenTryMessage = CosmosMessage<MsgChannelOpenTry>
export type MsgChannelOpenAckMessage = CosmosMessage<MsgChannelOpenAck>
export type MsgChannelOpenConfirmMessage = CosmosMessage<MsgChannelOpenConfirm>
export type MsgChannelCloseInitMessage = CosmosMessage<MsgChannelCloseInit>
export type MsgChannelCloseConfirmMessage = CosmosMessage<MsgChannelCloseConfirm>
export type MsgRecvPacketMessage = CosmosMessage<MsgRecvPacket>
export type MsgTimeoutMessage = CosmosMessage<MsgTimeout>
export type MsgTimeoutOnCloseMessage = CosmosMessage<MsgTimeoutOnClose>
export type MsgAcknowledgementMessage = CosmosMessage<MsgAcknowledgement>

export type ChannelMessage = CosmosMessage<Channel>
export type IdentifiedChannelMessage = CosmosMessage<IdentifiedChannel>
export type StateMessage = CosmosMessage<State>
export type OrderMessage = CosmosMessage<Order>
export type CounterpartyMessage = CosmosMessage<Counterparty>
export type PacketMessage = CosmosMessage<Packet>
export type PacketStateMessage = CosmosMessage<PacketState>
export type PacketIdMessage = CosmosMessage<PacketId>
export type AcknowledgementMessage = CosmosMessage<Acknowledgement>
export type TimeoutMessage = CosmosMessage<Timeout>

export type MsgCreateClientMessage = CosmosMessage<MsgCreateClient>
export type MsgUpdateClientMessage = CosmosMessage<MsgUpdateClient>
export type MsgUpgradeClientMessage = CosmosMessage<MsgUpgradeClient>
export type MsgSubmitMisbehaviourMessage = CosmosMessage<MsgSubmitMisbehaviour>
export type MsgRecoverClientMessage = CosmosMessage<MsgRecoverClient>
export type MsgIBCSoftwareUpgradeMessage = CosmosMessage<MsgIBCSoftwareUpgrade>
export type BankMsgUpdateParamsMessage = CosmosMessage<BankMsgUpdateParams>

export type IdentifiedClientStateMessage = CosmosMessage<IdentifiedClientState>
export type ConsensusStateWithHeightMessage = CosmosMessage<ConsensusStateWithHeight>
export type ClientConsensusStatesMessage = CosmosMessage<ClientConsensusStates>
export type HeightMessage = CosmosMessage<Height>
export type CoreClientParamsMessage = CosmosMessage<CoreClientParams>
export type ClientUpdateProposalMessage = CosmosMessage<ClientUpdateProposal>
export type UpgradeProposalMessage = CosmosMessage<UpgradeProposal>

export type MsgConnectionOpenInitMessage = CosmosMessage<MsgConnectionOpenInit>
export type MsgConnectionOpenTryMessage = CosmosMessage<MsgConnectionOpenTry>
export type MsgConnectionOpenAckMessage = CosmosMessage<MsgConnectionOpenAck>
export type MsgConnectionOpenConfirmMessage = CosmosMessage<MsgConnectionOpenConfirm>
export type AuthMsgUpdateParamsMessage = CosmosMessage<AuthMsgUpdateParams>

export type ConnectionEndMessage = CosmosMessage<ConnectionEnd>
export type IdentifiedConnectionMessage = CosmosMessage<IdentifiedConnection>
export type CoreConnectionStateMessage = CosmosMessage<CoreConnectionState>
export type CoreConnectionCounterpartyMessage = CosmosMessage<CoreConnectionCounterparty>
export type ClientPathsMessage = CosmosMessage<ClientPaths>
export type ConnectionPathsMessage = CosmosMessage<ConnectionPaths>
export type VersionMessage = CosmosMessage<Version>
export type TransferParamsMessage = CosmosMessage<TransferParams>

export type MerklePathMessage = CosmosMessage<MerklePath>
export type MerkleProofMessage = CosmosMessage<MerkleProof>

export type LightClientsLocalhostV2ClientStateMessage = CosmosMessage<LightClientsLocalhostV2ClientState>

export type LightClientsSolomachineV2ClientStateMessage = CosmosMessage<LightClientsSolomachineV2ClientState>
export type LightClientsTendermintV1ConsensusStateMessage = CosmosMessage<LightClientsTendermintV1ConsensusState>
export type LightClientsSolomachineV2HeaderMessage = CosmosMessage<LightClientsSolomachineV2Header>
export type LightClientsSolomachineV2MisbehaviourMessage = CosmosMessage<LightClientsSolomachineV2Misbehaviour>
export type LightClientsSolomachineV2SignatureAndDataMessage = CosmosMessage<LightClientsSolomachineV2SignatureAndData>
export type LightClientsSolomachineV2TimestampedSignatureDataMessage =
  CosmosMessage<LightClientsSolomachineV2TimestampedSignatureData>
export type LightClientsSolomachineV2SignBytesMessage = CosmosMessage<LightClientsSolomachineV2SignBytes>
export type LightClientsSolomachineV2HeaderDataMessage = CosmosMessage<LightClientsSolomachineV2HeaderData>

export type ClientStateMessage = CosmosMessage<ClientState>
export type ConsensusStateMessage = CosmosMessage<ConsensusState>
export type MisbehaviourMessage = CosmosMessage<Misbehaviour>
export type HeaderMessage = CosmosMessage<Header>
export type FractionMessage = CosmosMessage<Fraction>

export type FileDescriptorProtoMessage = CosmosMessage<FileDescriptorProto>
export type DescriptorProtoMessage = CosmosMessage<DescriptorProto>
// export type ExtensionRangeMessage = CosmosMessage<ExtensionRange>
export type FieldDescriptorProtoMessage = CosmosMessage<FieldDescriptorProto>
export type OneofDescriptorProtoMessage = CosmosMessage<OneofDescriptorProto>
export type EnumDescriptorProtoMessage = CosmosMessage<EnumDescriptorProto>
export type EnumValueDescriptorProtoMessage = CosmosMessage<EnumValueDescriptorProto>
export type ServiceDescriptorProtoMessage = CosmosMessage<ServiceDescriptorProto>
export type MethodDescriptorProtoMessage = CosmosMessage<MethodDescriptorProto>
// export type OptimizeModeMessage = CosmosMessage<OptimizeMode>
export type FileOptionsMessage = CosmosMessage<FileOptions>
export type MessageOptionsMessage = CosmosMessage<MessageOptions>
export type FieldOptionsMessage = CosmosMessage<FieldOptions>
export type OneofOptionsMessage = CosmosMessage<OneofOptions>
export type EnumOptionsMessage = CosmosMessage<EnumOptions>
export type EnumValueOptionsMessage = CosmosMessage<EnumValueOptions>
export type ServiceOptionsMessage = CosmosMessage<ServiceOptions>
export type MethodOptionsMessage = CosmosMessage<MethodOptions>
export type UninterpretedOptionMessage = CosmosMessage<UninterpretedOption>
export type SourceCodeInfoMessage = CosmosMessage<SourceCodeInfo>
export type GeneratedCodeInfoMessage = CosmosMessage<GeneratedCodeInfo>

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
export type MsgUpdateParamsNFTMessage = CosmosMessage<MsgUpdateParamsNFT>

export type ClassFeatureMessage = CosmosMessage<ClassFeature>

export type SendAuthorizationMessage = CosmosMessage<SendAuthorization>
export type NFTIdentifierMessage = CosmosMessage<NFTIdentifier>

export type MsgSendMessage = CosmosMessage<MsgSend>

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
export type MsgUpdateParamsFtMessage = CosmosMessage<MsgUpdateParamsFt>

export type TokenMessage = CosmosMessage<Token>
export type FeatureMessage = CosmosMessage<Feature>
export type DefinitionMessage = CosmosMessage<Definition>
export type DelayedTokenUpgradeV1Message = CosmosMessage<DelayedTokenUpgradeV1>
export type TokenUpgradeV1StatusMessage = CosmosMessage<TokenUpgradeV1Status>
export type TokenUpgradeStatusesMessage = CosmosMessage<TokenUpgradeStatuses>

export type MintAuthorizationMessage = CosmosMessage<MintAuthorization>
export type BurnAuthorizationMessage = CosmosMessage<BurnAuthorization>

export type MsgUpdateParamsFeeMessage = CosmosMessage<MsgUpdateParamsFee>
