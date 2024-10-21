import MailService from "./mailcontroller.js"
import htmlTemplates from '../../tamplates/tamplate.js'
import salaryData from "./sararyData.js"
import emailText from "../../tamplates/emailText.js"
const sendMail = async(req,res)=>{
           const {recipt_Id} = req.body
           const salary_data = await salaryData(recipt_Id);
           const {email} = salary_data;
           const emailContent = emailText(salary_data)
           const pdfContent = htmlTemplates(salary_data)
           console.log("email : ", email)
    try {
        MailService.sampleMail( pdfContent,emailContent, email)
        .then( () => {
          return res.status( 200 ).type('json').json({success:true, message: 'Email sent successfully'} )
        })
      } catch (error) {
        console.log(error)
        res.status( 500 ).json( {success:false, message:'Unknown error'} )
      }
}
export default sendMail