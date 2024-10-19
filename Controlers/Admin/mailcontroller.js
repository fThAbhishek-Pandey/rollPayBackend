import nodemailer from 'nodemailer'
import puppeteer from 'puppeteer';
import htmlTemplates from '../../tamplates/tamplate.js';

let emailConfig = {
    host: 'smtp.gmail.com', // SMTP provider in my case is Gmail
    port: 587, // the port that your SMTP provider ask for
    secure: false,
    auth: {
      user:"abhishek830564@gmail.com",
      pass: "bswu unhz fkep rydk",
    },
  }
  
  let email = 'abhishek.it2022-23@recabn.ac.in'; //email destination
  let sender = 'abhishek.it2022-23@recabn.ac.in'; // email where the mail's gonna be sent
  
  class MailController {
    static async sampleMail(){
      // creating mail 
      const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const template = htmlTemplates();
    await page.setContent(template, {waitUntil: 'domcontentloaded'})
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });
    await browser.close()


      // create the object for nodemailer 
      console.log("sample sender : ")
      let message = {
        from: sender, 
        to: email,
        subject: 'Sending Mail by abhishek.',
        text: 'Body of the mail.',
        html:htmlTemplates(),
        attachments: [
          {
              content :pdfBuffer,
              filename: 'gate fee recipt.pdf', 
              contentType: 'application/pdf'
          }],
        envelope: {
            from: `aapk@ Abhishek<${sender}>`,
            to: `${email}, <${email}>`
        }
      }
      this.mailSender(message);
    }
  
    static async mailSender(data){
      let transporter = nodemailer.createTransport(emailConfig);
        console.log("email sending...")
        transporter.verify((error) => error ? error: '');
        transporter.sendMail(data);
    }
  
  }
  
  export default  MailController;