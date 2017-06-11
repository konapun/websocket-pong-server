function gameController (db) {
  let id = 1
  const games = db.addCollection('games', {
    unique: [ 'id' ],
    indices: [ 'id' ]
  })

  return {
    create (req, res) {
      res.send(_createGame())
    },

    list (req, res) {
      res.send(games.find({ id: { '$ne': null } }))
    },

    get (req, res) {
      const id = req.params.id
      res.send(games.get(id))
    },

    joinAny (req, res) {
      let joinable = _getJoinableGames()
      if (!joinable) {
        joinable = [ _createGame() ]
      }
      return _joinById(joinable[0])
    },

    joinById (req, res) {
      const id = req.params.id
      console.log('Joining game by id', id)
      res.send(_joinById(id))
    }

  }

  function _createGame () {
    // const userId = req.params.userId

    // let user =
    let game = games.insert({
      id: id++,
      players: []
    })

    return game
  }

  function _getJoinableGames () {
    return games.where(obj => obj.players.length < 2)
  }

  function _joinById (id) {

  }
}

export default gameController
