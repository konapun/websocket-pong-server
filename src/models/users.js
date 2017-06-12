function userModel (db) {
  const collectionName = 'users'
  const users = db.getCollection(collectionName) || db.addCollection(collectionName, {
    unique: [ 'username' ],
    indices: []
  })

  return {
    create (username) {
      return users.insert({
        username
      })
    },

    list () {
      return users.find({ id: { '$ne': null } })
    },

    get (id) {
      return users.get(id)
    }
  }
}

export default userModel
