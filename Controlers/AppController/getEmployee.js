
import employee from "../../Modules/employeeModule.js"
const getEmployee = async(req,res) =>{
        try {
            const {emp_id}= req.body
            const myemployee = await employee.findOne(emp_id);
            res.json({success:true,myemployee })

        } catch (error) {
            console.log(error)
            res.json({success:false ,message: error.message})
        }
}
export default getEmployee