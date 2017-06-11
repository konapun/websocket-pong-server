function gameController (db) {
  return {
    create (req, res) {
      console.log('Creating game')
    },

    list (req, res) {
      console.log('Listing games')
    },

    join (req, res) {
      console.log('Joining game', req.params.id)
    }
  }
}

export default gameController
