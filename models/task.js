const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  user: { 
    type: String, 
    required: true 
  },

  title: { 
    type: String, 
    trim: true,
    required: "Enter a name for task"
  },

  description: { 
    type: String, 
    trim: true
  },

  status: { 
    type: String, 
    trim: true
  },

  icon: { 
    type: String, 
    trim: true
  },

  lastUpdated: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
