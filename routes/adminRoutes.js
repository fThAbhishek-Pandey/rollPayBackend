import express from 'express'
import Login from '../Controlers/Admin/login.js';
import authAdmin from '../middleware/admin/authAdmin.js';
import test from '../Controlers/Admin/test.js';
import addEmploy from '../Controlers/Admin/addEmploy.js';
import reciptHistory from '../Controlers/Admin/getRecieptHistory.js';
import sendMail from '../Controlers/Admin/sendmail.js';
const AdminRouter = express.Router();
AdminRouter.post('/login', Login);
AdminRouter.post('/test', authAdmin,test)
AdminRouter.post('/add-doctor', [authAdmin],addEmploy);
AdminRouter.get('/reciept-history', [authAdmin],reciptHistory);
AdminRouter.post('/mail', [authAdmin], sendMail);
export default AdminRouter;