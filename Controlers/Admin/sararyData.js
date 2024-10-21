import recieptModel from "../../Modules/reciept.js"
import employee from "../../Modules/employeeModule.js";
const salaryData =async (recipt_Id)=>{
        console.log(" i am salary data",recipt_Id);
        try {
            const reciptDetail = await recieptModel.findById(recipt_Id);
            console.log(reciptDetail)
            const {employee_id, pay,DA,month,  HRA, dec_depart, ele_ch, nps_per, nps_rupee,} = reciptDetail;
           
           const employeeDetail = await employee.findOne({emp_id : employee_id})
           console.log(employeeDetail);
           
            const DA_rupee= (pay*DA)/100;
            const total = pay+  DA_rupee + HRA;
            const npda= pay + DA_rupee;        
            const payment = total - dec_depart- ele_ch - nps_rupee;
            const { email, design, name,  depart, doj, dob} =employeeDetail;
           const salary_data=  {
            employee_id, pay, DA,DA_rupee, npda, HRA,dec_depart, ele_ch, nps_per, nps_rupee,total,payment,
            email,  design, name,  depart,month,  doj, dob};
           console.log("01",salary_data);
           return salary_data
        } catch (error) {
            console.log(error)
        }
}
export default salaryData