import express from 'express';
import ClassessController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router()
const classesControllers = new ClassessController()
const connectionsController = new ConnectionsController()


routes.get('/classes',classesControllers.index)
routes.post('/classes',classesControllers.create)

routes.get('/connections',connectionsController.index)
routes.post('/connections',connectionsController.create)

export default routes;