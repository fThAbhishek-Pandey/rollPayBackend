import express  from 'express'
import getAllEmployee from '../Controlers/AppController/getAllEmployee.js';
import getEmployee from '../Controlers/AppController/getEmployee.js';
const appRouter = express.Router();
appRouter.get('/all-eployees', getAllEmployee);
appRouter.get('/employee',getEmployee )
export default appRouter;