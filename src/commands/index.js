import uuid from 'uuid/v4'

const CONNECT = 'connection'

const commands = [
  require('./lobby'),
  require('./disconnect')
]

function install (channel, app) {
  app.store.websockets = {}
  channel.on(CONNECT, async socket => {
    const id = uuid()
    await app.store.set(`websocket.${id}`, socket)

    commands.forEach(command => command.install(id, app))
  })
}

export default { install }
