import express from 'express';
import ClassesControler from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControler();
const connectionController = new ConnectionController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);
routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);

export default routes;
