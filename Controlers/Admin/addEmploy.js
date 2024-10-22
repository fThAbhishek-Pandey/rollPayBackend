import employee from "../../Modules/employeeModule.js";
const addEmploy = async (req,res) =>{

    try {
        console.log("addEmploy panel : ");
        const {employeeData} = req.body
        const {emp_id, email,design, name,month, depart, doj, dob}= employeeData
        console.log(emp_id,email, design,month, name, depart, doj, dob);
        if( !emp_id||!email|| !design|| !name|| !depart|| !doj || !dob || !month){
                return res.json({success:false,message: "fill all details"});
        }
        const newemployeeData = {emp_id,email, design, name, depart,month, doj, dob }
        const newEmployee = new employee(newemployeeData);
        await newEmployee.save();
        res.json({ success: true, message: "love u Abhishek" });

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message});
    }
} 
export default addEmploy