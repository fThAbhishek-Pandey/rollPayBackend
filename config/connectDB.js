import mongoose from "mongoose";
const ConnectDB = async ()=>{
   mongoose.connection.on ('connected', ()=>console.log("Databse connected : "));
   await mongoose.connect(`${process.env.DB_URL}/SMS`)
}
export default ConnectDB