const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  helper: String,
  address: { type: Date, default: Date.now },
  duration: { type: String, required: true },
  materials: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: String, required: true }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;