import usersModel from '../models/users'

function userController (db) {
  const users = usersModel(db)

  return {
    create (req, res) {
      const { username } = req.params
      res.send(users.create(username))
    },

    list (req, res) {
      res.send(users.list())
    },

    get (req, res) {
      const id = req.params.id
      res.send(users.get(id))
    }
  }
}

export default userController
