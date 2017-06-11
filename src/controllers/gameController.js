function gameController (db) {
  let id = 1
  const games = db.addCollection('games', {
    unique: [ 'id' ],
    indices: [ 'id' ]
  })

  return {
    create (req, res) {
      // const userId = req.params.userId

      // let user =
      let game = games.insert({
        id: id++,
        players: []
      })

      res.send(game)
    },

    list (req, res) {
      res.send(games.find({ id: { '$ne': null } }))
    },

    get (req, res) {
      const id = req.params.id
      res.send(games.get(id))
    }
  }
}

export default gameController
