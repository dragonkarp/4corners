const mongoose = require("mongoose");
const db = require("../models");
const dotenv = require('dotenv'); 
dotenv.config()

// This file empties the Tasks collection and inserts the tasks below

mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/reacttasklist",   {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const taskSeed = [
  {
    user: "Michael",
    title: "Setup Kanban Board",
    description: "Use React Dnd to set this up",
    status: "Open",
    icon: "⭕️",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Margaret",
    title: "Setup Live Chat",
    description: "Use Socket IO to set this up",
    status: "Open",
    icon: "⭕️",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Daria",
    title: "Resource page",
    description: "Interact with Youtube api to return results",
    status: "In Progress",
    icon: "🔆️",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Nargiza",
    title: "User Authentication",
    description: "Using passport.js and keep track of user data",
    status: "Done",
    icon: "✅",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Heribert",
    title: "User Profile page setup",
    description: "set up profile page by combining all elements",
    status: "Done",
    icon: "✅",
    lastUpdated: new Date(Date.now())
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
