const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");

router
  .route('/')

  // Get All
//   .get((req, res) => {
//     contactController.findAll(req, res);
//   })


// Create 
  .post((req, res) => {
    contactController.store(req.body)
    .then((newContact) => {
      res.status(200).json(newContact);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred while saving the contact" });
    });
  });

  
module.exports = router;