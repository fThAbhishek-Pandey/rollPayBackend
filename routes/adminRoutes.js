import express from 'express'
import Login from '../Controlers/Admin/login.js';
import authAdmin from '../middleware/admin/authAdmin.js';
import test from '../Controlers/Admin/test.js';
const AdminRouter = express.Router();
AdminRouter.get('/login', Login);
AdminRouter.post('/test', authAdmin,test)
export default AdminRouter;