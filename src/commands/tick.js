const TICK = 'tick'

async function install (uuid, app) {
  const socket = await app.store.get(`websocket.${uuid}`)

  socket.on(TICK, msg => broadcastTick)
}

/**
 * [broadcastTick description]
 * @param  {[type]} socket [description]
 * @param  {[type]} msg    [description]
 * @return {[type]}        [description]
 */
function broadcastTick (socket, msg) {

}

export default { install }
