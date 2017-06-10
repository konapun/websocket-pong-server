const DISCONNECT = 'disconnect'

async function install (uuid, app) {
  const socket = await app.store.get(`websocket.${uuid}`)

  console.log('installing disconnect for user', uuid)
  socket.on(DISCONNECT, msg => disconnect(uuid, msg))
}

function disconnect (uuid, msg) {
  console.log('User disconnected!', uuid)
}

export { install }
