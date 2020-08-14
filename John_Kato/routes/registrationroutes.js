const express = require("express");

const router = express.Router();

const User = require('../models/registrationmodel');

//Getting salelist page with a search button for username
router.get('/',async (req, res) => {
  try {
    let items = await User.find()
    if (req.query.body) {
      items = await User.find()
    }
    res.render('registrationlist', { users: items })
  } catch (err) {
    res.status(400).send("unable to find items in the database");
  }
});

    module.exports = router;
   
      
      


