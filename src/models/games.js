function gameModel (db) {
  const collectionName = 'games'
  const games = db.getCollection(collectionName) || db.addCollection(collectionName, {
    unique: [],
    indices: []
  })

  return {
    create () {
      return games.insert({
        players: []
      })
    },

    get (id) {
      return games.get(id)
    },

    list () {
      return games.find({ id: { '$ne': null } })
    },

    getJoinableGames () {
      return games.where(obj => obj.players.length < 2)
    }
  }
}

export default gameModel
