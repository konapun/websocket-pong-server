import { UP, DOWN } from './direction'

class Paddle {
  constructor () {
    this.position = 50
    this.speed = 5 // percent/move
  }

  move (direction, amount) {
    amount = amount || this.speed
    switch (direction) {
      case UP:
        this.setPosition(this.position - amount)
        break
      case DOWN:
        this.setPosition(this.position + amount)
    }
  }

  setPosition (pos) {
    if (pos < 0) {
      pos = 0
    } else if (pos >= 100) {
      pos = 99
    }

    this.position = pos
    return pos
  }
}

export default Paddle
