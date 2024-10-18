
import employee from "../../Modules/employeeModule.js"
const getAllEmployee = async(req,res) =>{
        try {
            const employees = await employee.find({});
            res.json({success:false,employees })

        } catch (error) {
            console.log(error)
            res.json({success:false ,message: error.message})
        }
}
export default getAllEmployee