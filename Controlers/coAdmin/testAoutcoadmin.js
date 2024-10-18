const testAuthCo = (req,res) =>{
     try {
         console.log("testing");
         res.json({message:"testing my"})
     } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
     }
}
export default testAuthCo