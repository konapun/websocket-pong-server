import express from 'express'
import bodyParser from 'body-parser'
import commands from './commands'
import store from './store'
import routes from './routes'
import config from '../../config/server'

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(bodyParser.json())
app.use('/api', routes)

const channel = io.of('/socket')
commands.install(channel, { store })

server.listen(config.port, () => {
  console.log('Listening on port', config.port)
})
