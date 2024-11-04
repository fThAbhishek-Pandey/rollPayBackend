import mongoose from "mongoose";
const EmployeeSchema = new mongoose.Schema({
    emp_id:{
        type :String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    design:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    depart:{
        type:String,
        required:true
    },
    doj:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    }
})
const employee = mongoose.models.employee||mongoose.model('employee',EmployeeSchema)
export default employee;