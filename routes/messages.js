var express = require("express");
var router = express.Router();
var Message = require("../models/message");

router.post("/", async function (req, res, next) {
  try {
    var message = new Message({
      content: req.body.content,
      userId: req.body.userId,
    });

    const savedMessage = await message.save();
    res.status(201).json({
      messageSuccess: "Mensagem salva com sucesso!",
      message: savedMessage,
    });
  } catch (error) {
    res.status(500).json({
      errorTitle: "Um erro aconteceu",
      error: error,
    });
  }
});

module.exports = router;
