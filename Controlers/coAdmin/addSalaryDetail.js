import recieptModel from "../../Modules/reciept.js";

const addSalaryDetails = async (req, res) => {
  try {
    const {employee_id, pay, DA, HRA, dec_depart, ele_ch, nps_per, nps_rupee} = req.body;
    //   checking all data
    if (!employee_id|| !pay|| !DA || !HRA|| !dec_depart|| !ele_ch|| !nps_per|| !nps_rupee) {
   
        res.json({success:false, message:"Fill all data"});
    }
    //  creating new reciept in database
    const recieptData = { employee_id, pay, DA, HRA, dec_depart, ele_ch, nps_per, nps_rupee};
    const newRecipt = new recieptModel(recieptData);
    newRecipt.save();
    //  rending responce
    res.json({success:true, message :"reciept created"})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export default addSalaryDetails
