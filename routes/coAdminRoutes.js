import express from 'express'
import coLogin from '../Controlers/coAdmin/cologin.js';
import authCoAdmin from '../middleware/coAdmin/authCoAmin.js';
import testAuthCo from '../Controlers/coAdmin/testAoutcoadmin.js';
const coRoutes = express.Router();

coRoutes.get('/login',coLogin)
coRoutes.post('/test',[authCoAdmin],testAuthCo )
export default coRoutes