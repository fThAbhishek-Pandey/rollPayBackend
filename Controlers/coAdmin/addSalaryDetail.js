import recieptModel from "../../Modules/reciept.js";

const addSalaryDetails = async (req, res) => {
  try {
    const {RecieptData}= req.body
    const {employee_id, pay, DA, HRA, dec_depart, ele_ch,month, nps_per} = RecieptData;
    //   checking all data
    console.log("req.body : ",  req.body)
    console.log("de : ",employee_id, pay, DA, HRA, dec_depart, ele_ch,month, nps_per);
    if (!employee_id|| !month || !pay|| !DA || !HRA|| !dec_depart|| !ele_ch|| !nps_per) {
      return  res.json({success:false, message:"Fill all data"});
    }
    console.log("type : ",typeof pay, typeof nps_per)
    //  creating new reciept in database
    const recieptData = { employee_id, pay, DA, HRA,month, dec_depart, ele_ch, nps_per};
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
