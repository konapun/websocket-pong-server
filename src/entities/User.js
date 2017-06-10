class User {
  constructor (board, position, dimensions) { // { x: 0, y: 0 } is the upper left
    position = Object.assign({}, { x: 0, y: 0 }, position)
    dimensions = Object.assign({}, { width: 1, height: 1 }, dimensions)

    this.board = board
    this.position = position
    this.dimensions = dimensions
    this.speed = 10
  }

  moveDown () {
    const maxPos = this.board.height - this.dimensions.height
    const wantPos = this.position.y + this.speed
    const newPos = wantPos > maxPos ? maxPos : wantPos

    this.position.y = newPos
  }

  moveUp () {
    const minPos = 0
    const wantPos = this.position.y - this.speed
    const newPos = wantPos < minPos ? minPos : wantPos

    this.position.y = newPos
  }
}

export default User
