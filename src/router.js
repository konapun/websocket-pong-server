import express from 'express'
import gameController from './controllers/gameController'

function exportRoutes ({ database }) {
  return [ getGameRoutes ].reduce((routes, routeFn) => {
    return routeFn(routes, database)
  }, express())
}

function getGameRoutes (router, db) {
  const gc = gameController(db)

  router.get('/game', gc.list)
  router.post('/game', gc.create)
  router.get('/game/:id', gc.join)

  return router
}

export default { exportRoutes }
