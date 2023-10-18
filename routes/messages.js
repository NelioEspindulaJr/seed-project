var express = require("express");
var router = express.Router();

var Message = require("../models/message");

router.post("/", function (req, res, next) {
  var message = new Message({
    content: req.body.content,
  });
  message.save(function (err, result) {
    if (err) {
      return result.status(500).json({
        errorTitle: "Um erro aconteceu",
        error: err,
      });
    }

    res.status(201).json({
      messageSuccess: "Mensagem salva com sucesso!",
      message: result,
    });
  });
});
