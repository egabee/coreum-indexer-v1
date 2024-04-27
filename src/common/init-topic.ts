import { Kafka } from 'kafkajs'

const BROKERS = '35.241.225.177:19092,35.241.225.177:29092,35.241.225.177:39092'

const kafka = new Kafka({
  brokers: BROKERS.split(',') || [],
})

const producer = kafka.producer()

async function connectProducer(): Promise<void> {
  await producer.connect()
}

//eslint-disable-next-line
async function disconnectProducer(): Promise<void> {
  await producer.disconnect()
}

connectProducer()

kafka
  .admin()
  .createTopics({ topics: [{ topic: 'txs', numPartitions: 6 }] })
  .then(() => {
    console.log(`Topic created.`)
  })
  .catch(console.error)
  .finally(process.exit)
