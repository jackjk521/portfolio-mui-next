import Contact from "../../server/models/contact_model.js";
// import HTML_TEMPLATE from "../utility/mail-template.js";
// import SENDMAIL from "../utility/mailer.js";


export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // Create a new contact record in the database
      const newContact = await Contact.create(req.body);
      // const options = {
      //   from: "jackchu521@gmail.com", // sender address
      //   to: "jedchu541@gmail.com", // receiver email
      //   subject: "Sent by Nodemailer from Portfolio", // Subject line
      //   text: req.body.message,
      //   html: HTML_TEMPLATE(req.body.message),
      // };
      // SENDMAIL(options, (info) => {
      //   console.log("Email sent successfully");
      //   console.log("MESSAGE ID: ", info.messageId);
      // });
      // Return the newly created contact as the response
      res.status(200).json(newContact);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}
// module.exports = router;
