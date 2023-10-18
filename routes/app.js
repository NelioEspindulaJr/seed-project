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

  try {
    const userSave = await userObject.save();

    console.log(userSave);
    console.log("email salvo: ", userSave.email);

    res
      .status(201)
      .json({ messageSuccess: "Usuário salvo com sucesso", user: userSave });
  } catch (error) {
    result.status(500).json({
      errorTitle: "Um erro aconteceu ao salvar o usuário",
      error: err,
    });
  }

  res.redirect("/node-mongodb-mongoose-user-busca");
});

router.get(
  "/node-mongodb-mongoose-user-busca",
  async function (req, res, next) {
    const userFind = await User.findOne({});

    if (!userFind) {
      return res.send("Error!!!");
    }

    res.render("node", {
      firstNameV: userFind.firstName,
      lastNameV: userFind.lastName,
      passwordV: userFind.password,
      emailV: userFind.email,
      messagesV: userFind.message,
    });
  }
);

router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
