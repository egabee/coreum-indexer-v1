import xior from 'xior'
import { TransactionObject } from '../mappings/interfaces'

function currentTimestampInSeconds(): number {
  return Math.floor(Date.now() / 1000)
}

const xiorInstance = xior.create()

export class IggyProducer {
  private authTokens: {
    user_id: number
    tokens: {
      access_token: {
        token: string
        expiry: number
      }
      refresh_token: {
        token: string
        expiry: number
      }
    }
  }
  private url: string
  private requestHeaders: {
    headers: {
      'Content-Type': 'application/json'
      Authorization: string
    }
  }

  constructor(url: string) {
    this.url = url
    this.authTokens = {} as any
    this.requestHeaders = {} as any
  }

  static async create(url: string): Promise<IggyProducer> {
    const producer = new IggyProducer(url)
    await producer.login()

    return producer
  }

  private async login(): Promise<void> {
    const response = await xiorInstance.post(
      `${this.url}/users/login`,
      { username: 'iggy', password: 'iggy' },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )

    if (response.data && response.status === 200) {
      this.authTokens = response.data
      this.requestHeaders = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.authTokens.tokens.access_token.token}`,
        },
      }
    } else {
      logger.error(`${JSON.stringify(response)}`)
      throw new Error(`Failed to login iggy server. Got ${response.status}`)
    }
  }

  private async createStream(stream_id = 1, name = 'stream1'): Promise<void> {
    const response = await xiorInstance.post(
      `${this.url}/streams`,
      {
        stream_id,
        name,
      },
      this.requestHeaders,
    )

    console.log(JSON.stringify(response.data))
  }

  private async createTopic(stream_id = 1, topic_id = 1, name = 'topic1'): Promise<void> {
    const response = await xiorInstance.post(
      `${this.url}/streams/${stream_id}/topics`,
      {
        topic_id,
        name,
        replication_factor: 1,
        partitions_count: 3,
        message_expiry: 0,
      },
      this.requestHeaders,
    )

    logger.info(JSON.stringify(response.data))
  }

  async postMessage(message: TransactionObject): Promise<void> {
    if (this.authTokens.tokens.access_token.expiry < currentTimestampInSeconds()) {
      await this.login()
    }

    const response = await xiorInstance.post(
      `${this.url}/streams/1/topics/1/messages`,
      {
        partitioning: {
          kind: 'balanced',
          value: '',
        },
        messages: [
          {
            id: message.id,
            payload: JSON.stringify(message),
          },
        ],
      },
      this.requestHeaders,
    )

    if (response.status !== 201) {
      logger.error(`${response.statusText}`)
      throw new Error(`Failed to post message to iggy server. Got ${response.status} status from server`)
    }
  }
}

// let tokens: {
//   user_id: number
//   tokens: {
//     access_token: {
//       token: string
//       expiry: number
//     }
//     refresh_token: {
//       token: string
//       expiry: number
//     }
//   }
// }
// let headers = {
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: '',
//   },
// }

// function currentTimestampInSeconds(): number {
//   return Math.floor(Date.now() / 1000)
// }

// async function createStream(stream_id = 1, name = 'stream1'): Promise<void> {
//   const response = await xiorInstance.post(
//     `http://127.0.0.1:3000/streams`,
//     {
//       stream_id,
//       name,
//     },
//     {
//       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tokens.tokens.access_token.token}` },
//     },
//   )

//   console.log(JSON.stringify(response.data))
// }

// async function createTopic(stream_id = 1, topic_id = 1, name = 'topic1'): Promise<void> {
//   const response = await xiorInstance.post(
//     `http://127.0.0.1:3000/streams/${stream_id}/topics`,
//     {
//       topic_id,
//       name,
//       replication_factor: 1,
//       partitions_count: 3,
//       message_expiry: 0,
//     },
//     {
//       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tokens.tokens.access_token.token}` },
//     },
//   )

//   console.log(JSON.stringify(response.data))
// }

// async function login(): Promise<void> {
//   const response = await xiorInstance.post(
//     `http://127.0.0.1:3000/users/login`,
//     { username: 'iggy', password: 'iggy' },
//     {
//       headers: { 'Content-Type': 'application/json' },
//     },
//   )

//   if (response.data && response.status === 200) {
//     tokens = response.data
//     headers = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${tokens.tokens.access_token.token}`,
//       },
//     }
//   }
// }

// async function postMessage(message: TransactionObject): Promise<void> {
//   if (!tokens || tokens.tokens.access_token.expiry < currentTimestampInSeconds()) {
//     await login()
//   }

//   const response = await xiorInstance.post(
//     `http://127.0.0.1:3000/streams/1/topics/1/messages`,
//     {
//       partitioning: {
//         kind: 'partition_id',
//         value: 'AQAAAA==',
//       },
//       messages: [
//         {
//           id: message.id,
//           payload: JSON.stringify(message),
//         },
//       ],
//     },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${tokens.tokens.access_token.token}`,
//       },
//     },
//   )

//   if (response.status !== 201) {
//     logger.error(`${response.statusText}`)
//     throw new Error(`Failed to post message to iggy server. Got ${response.status} status from server`)
//   }
// }

// async function main(): Promise<void> {
//   if (!tokens || tokens.tokens.access_token.expiry < currentTimestampInSeconds()) {
//     await login()
//   }

//   // await createStream()
//   // await createTopic()

//   let i = 0

//   while (i < 1000) {
//     i++

//     const response = await xiorInstance.post(
//       `http://127.0.0.1:3000/streams/1/topics/1/messages`,
//       {
//         partitioning: {
//           kind: 'partition_id',
//           value: 'AQAAAA==',
//         },
//         messages: [
//           {
//             id: i,
//             payload: 'aGVsbG8=',
//           },
//           {
//             id: i,
//             payload: 'd29ybGQ=',
//             headers: {
//               key_1: {
//                 kind: 'string',
//                 value: 'dmFsdWUgMQ==',
//               },
//             },
//           },
//         ],
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${tokens.tokens.access_token.token}`,
//         },
//       },
//     )

//     // const response = await xiorInstance({
//     //   method: 'POST',
//     //   url: `http://127.0.0.1:3000/streams/1/topics/1/messages`,
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //     Authorization:
//     //       'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NjAzM2NmNS03ZWU2LTRiYjEtYWEwNy0xYWFmNDMyMjRiMWMiLCJpc3MiOiJpZ2d5LnJzIiwiYXVkIjoiaWdneS5ycyIsInN1YiI6MSwiaWF0IjoxNzA4OTYzNjU3LCJleHAiOjE3MDg5NjcyNTcsIm5iZiI6MTcwODk2MzY1N30.qg1NbyfvLvXigdrGNQjvfNAE8iKoghR0--mpGmmmmRI',
//     //   },
//     //   data: {
//     //     partitioning: {
//     //       kind: 'partition_id',
//     //       value: 'AQAAAA==',
//     //     },
//     //     messages: [
//     //       {
//     //         id: 0,
//     //         payload: 'aGVsbG8=',
//     //       },
//     //       {
//     //         id: 0,
//     //         payload: 'd29ybGQ=',
//     //         headers: {
//     //           key_1: {
//     //             kind: 'string',
//     //             value: 'dmFsdWUgMQ==',
//     //           },
//     //         },
//     //       },
//     //     ],
//     //   },
//     // })

//     console.log(response.status)
//   }
// }

// main().catch(console.error)

export const iggyProducerPromise = IggyProducer.create(process.env.IGGY_URL!)
