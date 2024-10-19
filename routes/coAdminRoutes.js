import express from 'express'
import coLogin from '../Controlers/coAdmin/cologin.js';
import authCoAdmin from '../middleware/coAdmin/authCoAmin.js';
import testAuthCo from '../Controlers/coAdmin/testAoutcoadmin.js';
import addSalaryDetails from '../Controlers/coAdmin/addSalaryDetail.js';
const coRoutes = express.Router();
coRoutes.get('/login',coLogin)
coRoutes.post('/test',[authCoAdmin],testAuthCo )
coRoutes.post('/reciept',[authCoAdmin],addSalaryDetails )
export default coRoutes