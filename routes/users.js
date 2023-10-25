var express = require("express");
var router = express.Router();
var User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/database");
const jwtDecode = require("jwt-decode");

router.post("/", async function (req, res, next) {
  try {
    const hash = await bcrypt.hash(req.body.password, 1);

    var user = new User({
      email: req.body.email,
      password: hash,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const savedUser = await user.save();
    res
      .status(201)
      .json({ message: "Usuário cadastrado com sucesso!", user: savedUser });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/user/:id", async function (req, res, next) {
  try {

    User.findById(req.params.id)

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({error: error});
  }
    
});

router.post("/user/:id", async function (req, res, next) {
  try {
    var user = User.findById(req.params.id)

    user.updateOne({
      favoriteCandy: req.body.favCandy,
      gender: req.body.gender,
      agree: req.body.agree,
    });

    await user.save();
    res
      .status(200)
      .json({ message: "Usuário editado com sucesso!", user: user });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});



router.post("/signin", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Usuário não encontrado." });
    }

    if (!user.comparePassword(password)) {
      return res
        .status(401)
        .json({ success: false, message: "Senha incorreta." });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      config.secret
    );

    return res.status(200).json({
      token: token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao processar a solicitação.",
      error: error,
    });
  }
});

module.exports = router;
