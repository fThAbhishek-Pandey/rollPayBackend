import employee from "../../Modules/employeeModule.js";
import validator from "email-validator";
const addEmploy = async (req,res) =>{

    try {
        console.log("addEmploy panel : ");
        const {employeeData} = req.body
        const {emp_id, email,design, name, depart, doj, dob}= employeeData
        console.log(emp_id,email, design, name, depart, doj, dob);
        if( !emp_id||!email|| !design|| !name|| !depart|| !doj || !dob){
                return res.json({success:false,message: "fill all details"});
        }
        if(!validator.validate(email)){
            return res.json({success:false,message: "email is not valid"});
        }
        const tag = email.split('@');
        if(tag[1] === 'recabn.ac.in') {
            return res.json({success:false,message: "must be @recabn.ac.in"});
        }
        const newemployeeData = {emp_id,email, design, name, depart, doj, dob }
        const newEmployee = new employee(newemployeeData);
        await newEmployee.save();
        res.json({ success: true, message: "love u Abhishek" });

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message});
    }
} 
export default addEmploy