const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  user: { 
    type: String, 
    required: true 
  },
  taskname: { 
    type: String, 
    trim: true,
    required: "Enter a name for task"
  },
  comments: [String],
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
