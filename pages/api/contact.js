import Contact from "../../server/models/contact_model.js";
export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // Create a new contact record in the database
      const newContact = await Contact.create(req.body);
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
