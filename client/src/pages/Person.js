import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import { TextArea, FormBtn } from "../components/Form";

function Person() {
  // Setting our component's initial state
  const [tasks, setTasks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all tasks and store them with setTasks
  useEffect(() => {
    loadTasks()
  }, [])

  // Loads all tasks and sets them to tasks
  function loadTasks() {
    API.getTasks()
      .then(res => 
        setTasks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a task from the database with a given id, then reloads tasks from the db
  function deleteTask(id) {
    API.deleteTask(id)
      .then(res => loadTasks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveTask method to save the task data
  // Then reload tasks from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    // if (formObject.user && formObject.taskname) {
    if (formObject.taskname) {
      API.saveTask({
        // user: formObject.user,
        taskname: formObject.taskname
      })
        .then(res => loadTasks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <Jumbotron>
              <h1>Tasks Assigned to You</h1>
            </Jumbotron>
            {tasks.length ? (
              <List>
                {tasks.map(task => (
                  <ListItem key={task._id}>
                    <Link to={"/tasks/" + task._id}>
                      <strong>
                        {task.taskname} assigned to <button className="userLabel">{task.user}</button>
                        
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteTask(task._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-4 sm-12">
            <Jumbotron>
              <h1>Tasks Assigned to Others</h1>
            </Jumbotron>
            {tasks.length ? (
              <List>
                {tasks.map(task => (
                  <ListItem key={task._id}>
                    <Link to={"/tasks/" + task._id}>
                      <strong>
                        {task.taskname} assigned to <button className="userLabel">{task.user}</button>
                        
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteTask(task._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-4 sm-12">
            <Jumbotron>
              <h1>Chat Container</h1>
            </Jumbotron>
           
          </Col>

        </Row>
      </Container>
    );
  }


export default Person;
