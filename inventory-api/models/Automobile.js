const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Automobile = new Schema({
  make: { type: Schema.Types.ObjectId, ref: "Make", required: true },
  engine: { type: Schema.Types.ObjectId, ref: "Engine", required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
});
