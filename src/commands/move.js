const MOVE = 'move'

async function install (uuid, app) {
  const socket = await app.store.get(`websocket.${uuid}`)

  socket.on(MOVE, msg => broadcastMove(socket, msg))
}

function broadcastMove (socket, msg) {
  const user = socket.player

  switch (msg.direction) {
    case 'up':
      user.moveUp()
      /* falls through */
    case 'down':
    default:
      user.moveDown()
  }

  console.log('User position is ', user.position)
}

export { install }
