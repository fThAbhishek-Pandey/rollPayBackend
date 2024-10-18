import express from 'express'
import Login from '../Controlers/Admin/login.js';
import authAdmin from '../middleware/admin/authAdmin.js';
import test from '../Controlers/Admin/test.js';
import addEmploy from '../Controlers/Admin/addEmploy.js';
const AdminRouter = express.Router();
AdminRouter.get('/login', Login);
AdminRouter.post('/test', authAdmin,test)
AdminRouter.post('/add-doctor', [authAdmin],addEmploy);
export default AdminRouter;