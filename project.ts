import { CosmosDatasourceKind, CosmosHandlerKind, CosmosProject } from '@subql/types-cosmos'

// Can expand the Datasource processor types via the genreic param
const project: CosmosProject = {
  specVersion: '1.0.0',
  version: '0.0.1',
  name: 'Egabee-starter',
  description: 'This project can be use as a starting point for developing indexers',
  runner: {
    node: {
      name: '@subql/node-cosmos',
      version: '>=3.0.0',
    },
    query: {
      name: '@subql/query',
      version: '*',
    },
  },
  schema: {
    file: './schema.graphql',
  },
  dataSources: [
    {
      kind: CosmosDatasourceKind.Runtime,
      startBlock: 0,

      endBlock: 1000000,

      mapping: {
        file: './dist/index.js',
        handlers: [
          {
            handler: 'handleTx',
            kind: CosmosHandlerKind.Transaction,
          },
        ],
      },
    },
  ],
  network: {
    /* The genesis hash of the network (hash of block 0) */
    /**
     * These endpoint(s) should be non-pruned archive nodes
     * Public nodes may be rate limited, which can affect indexing speed
     * When developing your project we suggest getting a private API key
     * We suggest providing an array of endpoints for increased speed and reliability
     */
    endpoint: [
      'https://full-node.mainnet-1.coreum.dev:26657',
      // 'https://full-node.testnet-1.coreum.dev:26657'
      // https://injective-rpc.w3coins.io   52669166
    ],
    chainId: 'coreum-mainnet-1',
    chaintypes: new Map([
      //"type": "/cosmos.slashing.v1beta1.MsgUnjail",
      [
        'cosmos.slashing.v1beta1.MsgUnjail',
        {
          file: './proto/cosmos/slashing/v1beta1/tx.proto',
          messages: ['MsgUnjail'],
        },
      ],
      [
        'cosmos.p2p',
        {
          file: './proto/cosmos/tendermint/p2p/types.proto',
          messages: ['DefaultNodeInfo', 'DefaultNodeInfoOther'],
        },
      ],
      [
        'cosmos.abci',
        {
          // proto/cosmos/tendermint/abci/types.proto
          file: './proto/cosmos/tendermint/abci/types.proto',
          messages: ['RequestFinalizeBlock'],
        },
      ],
      // [
      //   'cosmos.validator',
      //   {
      //     // proto/cosmos/tendermint/types/validator.proto
      //     file: './proto/cosmos/tendermint/types/validator.proto',
      //     messages: ['BlockIDFlag'],
      //   },
      // ],
      [
        'cosmos.tx.v1beta1',
        {
          file: './proto/cosmos/tx/v1beta1/tx.proto',
          messages: ['Tx', 'TxRaw', 'TxBody'], //,'SignDoc','SignDocDirectAux
        },
      ],
      // /ibc.lightclients.tendermint.v1.Header
      [
        '/ibc.lightclients.tendermint.v1.Header',
        {
          file: './proto/ibc/lightclients/tendermint/v1/tendermint.proto',
          messages: ['Header'],
        },
      ],
      [
        '/cosmos.tendermint.types.SignedHeader',
        {
          file: './proto/cosmos/tendermint/types/types.proto',
          messages: ['SignedHeader'],
        },
      ],
      [
        '/cosmos.tendermint.types.ValidatorSet',
        {
          file: './proto/cosmos/tendermint/types/validator.proto',
          messages: ['ValidatorSet', 'Validator'],
        },
      ],
      [
        '/cosmos.tendermint.crypto.PublicKey',
        {
          file: './proto/cosmos/tendermint/crypto/keys.proto',
          messages: ['PublicKey'],
        },
      ],
      // tendermint.crypto.PublicKey

      [
        '/cosmos.tendermint.version.Consensus',
        {
          file: './proto/cosmos/tendermint/version/types.proto',
          messages: ['Consensus'],
        },
      ],
      [
        'cosmos.gov.v1beta1',
        {
          file: './proto/cosmos/gov/v1beta1/tx.proto',
          messages: ['MsgVote'],
        },
      ],
      [
        'cosmos.gov.v1beta1.option',
        {
          file: './proto/cosmos/gov/v1beta1/gov.proto',
          messages: ['VoteOption'],
        },
      ],
      [
        'ibc.core.client.v1',
        { file: './proto/ibc/core/client/v1/tx.proto', messages: ['MsgUpdateClient', 'MsgCreateClient'] },
      ],
      [
        'ibc.applications.transfer.v1',
        {
          file: './proto/ibc/applications/transfer/v1/tx.proto',
          messages: ['MsgTransfer'],
        },
      ],
      [
        'ibc.core.client.v1.Height',
        {
          file: './proto/ibc/core/client/v1/client.proto',
          messages: ['Height'],
        },
      ],

      // MsgChannelOpenInit ==>/proto/ibc/core/channel/v1/tx.proto
      // MsgChannelOpenAck
      // MsgChannelOpenConfirm

      [
        'ibc.core.channel.v1',
        {
          file: './proto/ibc/core/channel/v1/tx.proto',
          messages: [
            'MsgRecvPacket',
            'MsgAcknowledgement',
            'MsgChannelOpenInit',
            'MsgChannelOpenAck',
            'MsgChannelOpenConfirm',
          ],
        },
      ],
      [
        'ibc.core.channel.v1.Packet',
        {
          file: './proto/ibc/core/channel/v1/channel.proto',
          messages: ['Packet'],
        },
      ],

      [
        'cosmos.authz.v1beta1',
        {
          file: './proto/cosmos/authz/v1beta1/tx.proto',
          messages: ['MsgGrant'],
        },
      ],

      [
        'cosmos.authz.v1beta1.Grant',
        {
          file: './proto/cosmos/authz/v1beta1/authz.proto',
          messages: ['Grant'],
        },
      ],

      [
        'cosmos.bank.v1beta1',
        {
          file: './proto/cosmos/bank/v1beta1/tx.proto',
          messages: ['MsgSend', 'MsgMultiSend'],
        },
      ],
      [
        'cosmos.bank.v1beta1.bank',
        {
          file: './proto/cosmos/bank/v1beta1/bank.proto',
          messages: ['Input', 'Output'],
        },
      ],
      [
        'cosmos.base.v1beta1.coin',
        {
          file: './proto/cosmos/base/v1beta1/coin.proto',
          messages: ['Coin'],
        },
      ],
      [
        'cosmos.distribution.v1beta1',
        {
          file: './proto/cosmos/distribution/v1beta1/tx.proto',
          messages: ['MsgWithdrawDelegatorReward'],
        },
      ],
      [
        'cosmos.staking.v1beta1',
        { file: './proto/cosmos/staking/v1beta1/tx.proto', messages: ['MsgDelegate', 'MsgBeginRedelegate'] },
      ],
      [
        'cosmwasm.wasm.v1',
        {
          file: './proto/cosmwasm/wasm/v1/tx.proto',
          messages: ['MsgInstantiateContract', 'MsgExecuteContract'],
        },
      ],

      ['google.protobuf.Any', { file: './proto/google/protobuf/any.proto', messages: ['Any'] }],
      ['google.protobuf.Timestamp', { file: './proto/google/protobuf/timestamp.proto', messages: ['Timestamp'] }],
      [
        'coreum.asset.nft.v1',
        {
          file: './proto/coreum/asset/nft/v1/tx.proto',
          messages: [
            'MsgIssueClass',
            'MsgMint',
            'MsgBurn',
            'MsgFreeze',
            'MsgUnfreeze',
            'MsgAddToWhitelist',
            'MsgRemoveFromWhitelist',
            'MsgClassFreeze',
            'MsgClassUnfreeze',
            'MsgAddToClassWhitelist',
            'MsgRemoveFromClassWhitelist',
            'MsgUpdateParams',
          ],
        },
      ],
      [
        'coreum.asset.nft.v1.ClassFeature',
        { file: './proto/coreum/asset/nft/v1/nft.proto', messages: ['ClassFeature'] },
      ],
      [
        'coreum.asset.nft.v1.authz',
        { file: './proto/coreum/asset/nft/v1/authz.proto', messages: ['SendAuthorization', 'NFTIdentifier'] },
      ],
      ['coreum.nft.v1beta1', { file: './proto/coreum/nft/v1beta1/tx.proto', messages: ['MsgSend'] }],
      ['coreum.nft.v1beta1.nft', { file: './proto/coreum/nft/v1beta1/nft.proto', messages: ['Class', 'NFT'] }],
      [
        'coreum.asset.ft.v1',
        {
          file: './proto/coreum/asset/ft/v1/tx.proto',
          messages: [
            'MsgIssue',
            'MsgMint',
            'MsgBurn',
            'MsgFreeze',
            'MsgUnfreeze',
            'MsgGloballyFreeze',
            'MsgGloballyUnfreeze',
            'MsgSetWhitelistedLimit',
            'MsgUpgradeTokenV1',
            'MsgUpdateParams',
          ],
        },
      ],
      [
        'coreum.asset.ft.v1.Token',
        {
          file: './proto/coreum/asset/ft/v1/token.proto',
          messages: [
            'Token',
            'Feature',
            'Definition',
            'DelayedTokenUpgradeV1',
            'TokenUpgradeV1Status',
            'TokenUpgradeStatuses',
          ],
        },
      ],
      [
        'coreum.asset.ft.v1.authz',
        { file: './proto/coreum/asset/ft/v1/authz.proto', messages: ['MintAuthorization', 'BurnAuthorization'] },
      ],
      ['coreum.feemodel.v1', { file: './proto/coreum/feemodel/v1/tx.proto', messages: ['MsgUpdateParams'] }],
    ]),
  },
}

// Must set default to the project instance
export default project
