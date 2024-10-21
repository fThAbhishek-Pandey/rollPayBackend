import jwt from 'jsonwebtoken'
const Login = (req,res)=>{
    const jwtSecret= process.env.JWT_SECKRET
        
        try {
            const {email, password} = req.body
            console.log('i am in login backend: ', req.body)
            console.log("email", email, "password", password);
            if(email=== process.env.ADMIN_EMAIL && password ){
                const adminToken = jwt.sign(email+password,jwtSecret)
                res.json({success:true, adminToken})
            }
            else{
                res.json({success:false, message:"Invalid Cridencial"})
            }
        } catch (error) {
            console.log(error)
            res.json({success:false, message:error.message })
        }
}
export default Login