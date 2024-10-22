import recieptModel from '../../Modules/reciept.js'

const reciptHistory = async(req,res)=>{
       try {
           const allReciept= await recieptModel.find({});
           res.json({success: true, allReciept});
       } catch (error) {
           console.log(error)
           res.json({success: false, message: error.message})
       }
}
export default reciptHistory