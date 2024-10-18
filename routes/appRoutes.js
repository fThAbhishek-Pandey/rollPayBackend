import express  from 'express'
import getAllEmployee from '../Controlers/AppController/getAllEmployee.js';
const appRouter = express.Router();
appRouter.get('/all-eployees', getAllEmployee);
export default appRouter;