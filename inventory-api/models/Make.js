const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Make = new Schema({
  name: { type: String, required: true },
});

Make.virtual("url").get(function () {
  return "/inventory/make/" + this._id;
});

module.exports = mongoose.model("Make", Make);
