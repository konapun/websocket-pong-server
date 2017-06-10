import express from 'express'
import gameController from './controllers/gameController'

const routes = express()

routes.get('/game', gameController.list)
routes.get('/game/:id', gameController.join)

export default routes
