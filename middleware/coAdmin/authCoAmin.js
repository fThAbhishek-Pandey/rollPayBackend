import jwt from 'jsonwebtoken'

const authCoAdmin = (req,res,next) =>{
    try {
        const {cotoken} = req.headers
        if(!cotoken) {
            return res.json({success:false, message: "token is NULL or UNDEFINED"})
        }
        const decode_token = jwt.verify(cotoken, process.env.JWT_SECKRET)
        if(decode_token !== process.env.COADMIN_EMAIL + process.env.COADMIN_PASSWORD){
            return res.json({success:false, message:"Invalid Credencial"})
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({success:true, message: error.message});
    }
}
export default authCoAdmin