import nodemailer from 'nodemailer'
import generatePDF from './generatepdf.js';
let emailConfig = {
    host: 'smtp.gmail.com', // SMTP provider in my case is Gmail
    port: 587, // the port that your SMTP provider ask for
    secure: false,
    auth: {
      user:"abhishek830564@gmail.com",
      pass: "bswu unhz fkep rydk",
    },
  }
  
  // let dest_email = 'abhishek830564@gmail.com'; //email destination
  let sender = 'abhishek.it2022-23@recabn.ac.in'; // email where the mail's gonna be sent
  
  class MailController 
  {
    static async sampleMail(pdfContent,emailContent,dest_email){
      // creating mail 
      // console.log("pdfContent : ",pdfContent,"emailContent : ",emailContent, "dest_email",dest_email  )
      
    const pdfBuffer = generatePDF(pdfContent);
    
      // create the object for nodemailer 
      // console.log("sample sender : ")
      let message = {
        from: sender, 
        to:dest_email,
        subject: 'salay slip',
        text: 'Body of the mail.',
        html:emailContent,
        // attachments: [
        //   {
        //       content :pdfBuffer,
        //       filename: 'salary.pdf', 
        //       contentType: 'application/pdf'
        //   }],
        envelope: {
            from: `aapk@ Abhishek<${sender}>`,
            to: `${dest_email}, <${dest_email}>`
        }
      }
      this.mailSender(message);
    }
    static async mailSender(data){
      let transporter =  nodemailer.createTransport(emailConfig);
            console.log("email sending...")
        transporter.verify((error) => error ? error: '');
      await  transporter.sendMail(data);
    }
  }
  
  export default  MailController;