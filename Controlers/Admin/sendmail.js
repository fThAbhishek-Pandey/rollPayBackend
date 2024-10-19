import MailService from "./mailcontroller.js"
const sendMail = async(req,res)=>{
    try {
        MailService.sampleMail()
        .then( () => {
          return res.status( 200 ).type('json').json({success:true, message: 'Email sent successfully'} )
        })
      } catch (error) {
        console.log(error)
        res.status( 500 ).json( {success:false, message:'Unknown error'} )
      }
}
export default sendMail