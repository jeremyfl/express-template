const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/name", (req, res) => {
  const user = new User(1999);

  res.send({
    name: user.name(),
    age: user.age(),
    isGay: user.isUserGay()
  });
});

module.exports = router;
