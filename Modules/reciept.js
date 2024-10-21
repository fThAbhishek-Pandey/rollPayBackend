import mongoose from "mongoose";
const RecieptSchema = new mongoose.Schema({
    employee_id:{
        type:String,
        required:true
    },
    pay:{
        type:Number,
        required:true
    },
    DA:{
        type:Number,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    HRA:{
        type:Number,
        required:true,
    },
    dec_depart:{
        type:Number,
        required:true
    },
    ele_ch:{
        type:Number,
        required:true,
    },
    nps_per:{
        type:Number,
        required:true
    },
    nps_rupee:{
        type:Number,
        require:true
    },
    isComplete:{
        type:Boolean,
        default:false
    },
    isCancel:{
        type:Boolean,
        default:false
    },
    mailed:{
        type:Boolean,
        default:false
    }

})
const recieptModel = mongoose.models.reciept|| mongoose.model('reciept',RecieptSchema )
export default recieptModel