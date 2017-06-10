const gameController = {
  list (req, res) {
    console.log('Listing games!')
  },

  join (req, res) {
    console.log('Joining game', req.params.id)
  }
}

export default gameController
