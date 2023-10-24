var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Message", schema);
