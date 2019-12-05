const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Jobs collection and inserts the jobs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/topnotch_db"
);

const bookSeed = [
  {
    date: "",
    time: "",
    helper: "",
    address: "",
    duration: "",
    materials: "",
    description: "",
    cost: "",
    
  },
  {
    date: "",
    time: "",
    helper: "",
    address: "",
    duration: "",
    materials: "",
    description: "",
    cost: "",
  },
  {
    date: "",
    time: "",
    helper: "",
    address: "",
    duration: "",
    materials: "",
    description: "",
    cost: "",
  },
  {
    date: "",
    time: "",
    helper: "",
    address: "",
    duration: "",
    materials: "",
    description: "",
    cost: "",
  },
];

db.Job
  .remove({})
  .then(() => db.Job.collection.insertMany(jobSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
