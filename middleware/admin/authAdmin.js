import jwt from 'jsonwebtoken'

const authAdmin = (req,res,next)=>{
    try {
          const {adminToken} = req.headers;
          console.log("adminToken : ",adminToken);
          if(!adminToken) {
            return res.json({success:false, message: "admin token should not be NUll or undefined"});
          }
          const tokenDecode = jwt.verify(adminToken, process.env.JWT_SECKRET)
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