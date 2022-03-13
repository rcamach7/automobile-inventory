const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Make = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Make", Make);
