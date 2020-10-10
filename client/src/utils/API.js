import axios from "axios";

export default {
  // Gets all tasks
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets the task with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a task to the database
  saveTask: function(taskData) {
    return axios.post("/api/tasks", taskData);
  },
  // Create new user //not sure if this is correct - Mike Li
  createUser: function(newUserData) {
    return axios.post("/api/user/create", newUserData);
  }
};
