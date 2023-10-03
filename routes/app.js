var User = require("../models/user");
var express = require("express");
var router = express.Router();

router.get("/node-mongodb-mongoose-user", function (req, res, next) {
  res.render("node");
});

router.post("/node-mongodb-mongoose-user", async function (req, res, next) {
  var emailVar = req.body.emailBody;
  var userObject = new User({
    firstName: "Vinicius",
    lastName: "Rosalen",
    password: "password",
    email: emailVar,
  });
  await userObject.save();

  res.redirect("/node-mongodb-mongoose-user-busca");
});

router.get("/node-mongodb-mongoose-user", async function (req, res, next) {
  // User.findOne({}, function (err, documents) {
  //   if (err) {
  //     return res.send("Error!! :-(");
  //   }
  //   res.render("node", { firstNameV: documents });
  // });
  const userFind = await User.findOne({});
  if (isNull(userFind)) {
    return res.send("Error!!!");
  }

  res.render("node", {
    firstNameV: userFind.firstName,
    lastNameV: userFind.lastName,
    passwordV: userFind.password,
    emailV: userFind.email,
    messagesV: userFind.message,
  });
});

module.exports = router;
