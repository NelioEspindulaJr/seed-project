const bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require("mongoose-unique-validator");

var schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  token: { type: String },
  favoriteCandy : {type: String},
  gender : {type: String},
  agree: {type: Boolean},
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

schema.methods.comparePassword = function (loggingUserPassword) {
  return bcrypt.compare(loggingUserPassword, this.password);
};

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", schema);
