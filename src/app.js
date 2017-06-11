import express from 'express'
import bodyParser from 'body-parser'
import Loki from 'lokijs'
import commands from './commands'
import store from './store'
import router from './router'
import config from '../config'

const app = express()
const env = config.env
const database = new Loki(config[env].dbname, { verbose: env === 'development' })
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(bodyParser.json())
app.use('/api', router.exportRoutes({ database }))

const channel = io.of('/socket')
commands.install(channel, { store })

server.listen(config[env].port, () => {
  console.log('Listening on port', config[env].port)
})
