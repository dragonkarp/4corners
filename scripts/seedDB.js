const mongoose = require("mongoose");
const db = require("../models");
const dotenv = require('dotenv'); 
dotenv.config()

// This file empties the Tasks collection and inserts the tasks below

mongoose.connect(process.env.MONGODB_URI  || "mongodb+srv://user:69mFuTJutYZw2Qoc@clusterexplore.uqtfh.mongodb.net/reacttasklist?retryWrites=true&w=majority",   {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const taskSeed = [
  {
    user: "Daria",
    title: "Debugging main page Redirect",
    description: "Change the main page from board to user page",
    status: "Open",
    icon: "⭕️",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Daria",
    title: "Drag and Drop functionality",
    description: "Add drag and drop divs and send updates to the backend",
    status: "Open",
    icon: "⭕️",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Daria",
    title: "Fix Chat Component",
    description: "Modify styling to to resize the chat div",
    status: "Open",
    icon: "⭕️",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Margaret",
    title: "Styling for Resource page",
    description: "Make background Solid color",
    status: "In Progress",
    icon: "🔆️",
    lastUpdated: new Date(Date.now())
  },
  {
    user: "Margaret",
    title: "Combining Passport code",
    description: "Refactor code and add missing pieces",
    status: "In Progress",
    icon: "🔆️",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Nargiza",
    title: "Debug navbar under Resource page",
    description: "Currenlty we don't see github look in tab section ",
    status: "Done",
    icon: "✅",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Nargiza",
    title: "File Upload feature",
    description: "Add support for a user to add useful resources",
    status: "Done",
    icon: "✅",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Heribert",
    title: "Modal styling for Create new task",
    description: "Rearrage the divs so that the form looks aligned",
    status: "Done",
    icon: "✅",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Heribert",
    title: "Youtube api and github api for Resources",
    description: "Access data from 3rd party api to pull into resources",
    status: "Done",
    icon: "✅",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Michael",
    title: "Initial setup for Login functionality",
    description: "Look into Authentication, creating user, and redirecting users",
    status: "Done",
    icon: "✅",
    lastUpdated: new Date(Date.now())
  },

  {
    user: "Michael",
    title: "Debug Task board",
    description: "Currently user tasks are in irrelevant divs. Remove them",
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
