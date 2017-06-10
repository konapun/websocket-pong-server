async function install (uuid, app) {
  const socket = await app.store.get(`websocket.${uuid}`)
}

export { install }
