import nodemailer from "nodemailer";

require("dotenv").config();
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "yahoo",
  host: "smtp.yahoo.com",
  port: 587,
  secure: false,
  auth: {
    user: "jedchu_521@yahoo.com",
    pass: process.env.EMAIL_PASS
  },
});

const SENDMAIL = async (mailDetails, callback) => {
    try {
      const info = await transporter.sendMail(mailDetails)
      callback(info);
    } catch (error) {
      console.log(error);
    } 
  };
  

export default SENDMAIL;