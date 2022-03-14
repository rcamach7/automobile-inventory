const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Automobile = new Schema({
  make: { type: Schema.Types.ObjectId, ref: "Make", required: true },
  engine: {
    type: String,
    required: true,
    enum: ["v4", "v6", "v8", "v12", "electric"],
    default: "v4",
  },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
});

//Export model
module.exports = mongoose.model("Automobile", Automobile);
