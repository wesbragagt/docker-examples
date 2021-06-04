import express from 'express'
import dotenv from 'dotenv'
import redis from 'redis'

dotenv.config()

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

client.set('visits', 0)

const app = express()
const PORT = 8080

app.get('/', (req,res) => {
    client.get('visits', (err, visits) => {
        const newVisits = Number(visits) + 1
        res.send('Number of visits is: ' + newVisits)
        client.set('visits', newVisits)
    })
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})