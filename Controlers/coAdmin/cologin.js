import jwt from 'jsonwebtoken'
const   coLogin = (req,res)=>{
       try {
          const {email, password}= req.body
          if(email === process.env.COADMIN_EMAIL && password === process.env.COADMIN_PASSWORD){
              const cotoken = jwt.sign(email+password, process.env.JWT_SECKRET)
              res.json({success:true, cotoken})
          }
          else {
            res.json({success: false, message:"Invalid cridencial"})
          }

       } catch (error) {
            console.log(error);
            res.json({success:false, message:error.message})
       }
}
export default coLogin