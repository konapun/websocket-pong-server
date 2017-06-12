import gamesModel from '../models/games'

function gameController (db) {
  const games = gamesModel(db)

  return {
    create (req, res) {
      res.send(games.create())
    },

    list (req, res) {
      res.send(games.list())
    },

    get (req, res) {
      const id = req.params.id
      res.send(games.get(id))
    },

    joinAny (req, res) {
      let joinable = games.getJoinableGames()
      if (!joinable) {
        joinable = [ games.create() ]
      }
      return _joinById(joinable[0])
    },

    joinById (req, res) {
      const id = req.params.id
      console.log('Joining game by id', id)
      res.send(_joinById(id))
    }

  }

  function _joinById (id) {
    return {} // FIXME - replace with model operation
  }
}

export default gameController
