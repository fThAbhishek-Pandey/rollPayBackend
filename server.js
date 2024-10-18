import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import AdminRouter from './routes/adminRoutes.js';
import ConnectDB from './config/connectDB.js';
import coRoutes from './routes/coAdminRoutes.js';
import appRouter from './routes/appRoutes.js';
const app = express();
const port= process.env.PORT;
ConnectDB()
app.use(cors());
console.log("i am server : ")
app.use(express.json());
app.use('/admin',AdminRouter)
app.use('/coadmin',coRoutes)
app.use('/app', appRouter)
app.use('/',(req,res)=>{
      res.json("API is working");
})
app.listen (port, ()=>{
    console.log("server is runnint at Port : ",port);
})