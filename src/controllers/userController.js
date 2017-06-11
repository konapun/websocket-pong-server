function userController (db) {
  let id = 1
  const users = db.addCollection('users', {
    unique: [ 'id' ],
    indices: [ 'id' ]
  })

  return {
    create (req, res) {
      const params = req.params

      let user = users.insert({
        id: id++,
        username: params.username
      })

      res.send(user)
    },

    list (req, res) {
      res.send(users.find({ id: { '$ne': null } }))
    },

    get (req, res) {
      const id = req.params.id
      res.send(users.get(id))
    }
  }
}

export default userController
