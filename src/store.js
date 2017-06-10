import backer from 'cached'

const store = backer('store', {
  backend: {
    type: 'memory'
  }
})

/**
 * A wrapper for a cache implementation
 *
 * `get` and `set` both return a promise
 */
const cache = {
  get (key) {
    return store.get(key)
  },

  set (key, value) {
    return store.set(key, value)
  }
}

export default cache
