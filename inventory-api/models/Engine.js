const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Engine = new Schema({
  type: {
    type: String,
    required: true,
    enum: ["v4", "v6", "v8", "v12", "electric"],
    default: "v4",
  },
});
