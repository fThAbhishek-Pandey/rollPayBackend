import jwt from 'jsonwebtoken'

const authAdmin = (req,res,next)=>{
    try {
          const {admintoken} = req.headers;
          console.log(req.headers);
          console.log("adminToken : ",admintoken);
          if(!admintoken) {
            return res.json({success:false, message: "admin token should not be NUll or undefined"});
          }
          const tokenDecode = jwt.verify(admintoken, process.env.JWT_SECKRET)
          if( tokenDecode !== process.env.ADMIN_EMAIL+ process.env.ADMIN_PASSWORD ){
            return res.json({success:false, message :"Invalid credencial"})
          }
          
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }


}
export default authAdmin