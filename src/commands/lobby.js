import User from '../entities/User'
// const Game = require('../entities/Game')

const LOGOUT = 'logout'
const JOIN_GAME = 'join-game'
const CREATE_GAME = 'create-game'
const START_GAME = 'start-game'

async function install (uuid, app) {
  const socket = await app.store.get(`websocket.${uuid}`)

  socket.on(LOGOUT, msg => logout(app, socket, msg))
  socket.on(CREATE_GAME, msg => startGame(app, socket, msg))
  socket.on(JOIN_GAME, msg => findGame(app, socket, msg))
  socket.on(START_GAME, msg => startGame(app, socket, msg))
}

function logout (app, socket, msg) {
  console.log('Got logout event from socket', socket.id)
}

function findGame (app, socket, msg) {
  console.log('Finding game for socket', socket.id, msg)
}

function createGame () {

}

function startGame (app, socket, msg) {
  const player = new User({ height: 100 }, { x: 0, y: 0 }, { width: 5, height: 20 })

  // app.store.set('player', player)
  // const username = msg.username
  console.log('Starting game for socket', socket.id, msg)
}

export { install }
