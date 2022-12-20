const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  score: { type: Number, required: true },
});

const Gamemodel = mongoose.model("gamemodel", gameSchema);

module.exports = { Gamemodel };
