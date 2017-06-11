import express from 'express'
import gameController from './controllers/gameController'
import userController from './controllers/userController'

function exportRoutes ({ database }) {
  return [ getUserRoutes, getGameRoutes ].reduce((routes, routeFn) => {
    return routeFn(routes, database)
  }, express())
}

function getUserRoutes (router, db) {
  const uc = userController(db)

  router.get('/user', uc.list)
  router.post('/user', uc.create)
  router.get('/user/:id', uc.get)

  return router
}

function getGameRoutes (router, db) {
  const gc = gameController(db)

  router.get('/game', gc.list)
  router.post('/game', gc.create)
  router.get('/game/:id', gc.get)
  router.get('/game/join', gc.joinAny)
  router.get('/game/join/:id', gc.joinById)
  return router
}

export default { exportRoutes }
