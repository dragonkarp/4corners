const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Tasks collection and inserts the tasks below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reacttasklist"
);

const taskSeed = [
  {
    user: "Michael Li",
    taskname: "livechat",
    comments: "",
    date: new Date(Date.now())
  },
  {
    user: "Heribert Villazana",
    taskname: "resources page",
    comments: "",
    date: new Date(Date.now())
  },
  {
    user: "Daria Nadarajah",
    taskname: "realtime updates",
    comments: "",
    date: new Date(Date.now())
  },
  {
    user: "Nargiza Boronchieva",
    taskname: "login page",
    comments: "",
    date: new Date(Date.now())
  },
  {
    user: "Margaret Seiche",
    taskname: "seed database",
    comments: "",
    date: new Date(Date.now())
  }
];

db.Task
  .remove({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
