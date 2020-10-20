import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Chat from "../components/Chat";
import chat from "../components/Chat/chat.css";
import TaskUpdates from "../components/TaskUpdates";
import MyTasks from "../components/MyTasks";


function Person(props) {
  console.log("person props", props.userData.firstName);

  // Setting our component's initial state
  const [tasks, setTasks] = useState([])


  return (
    <Container fluid>
      <Row>
        <Col size="md-4">

        <div  style={{margin:"10px" }} className="chat">
            <header>
            <h3  style={{textAlign:"center"}}>Tasks Assigned to Others</h3>
            </header>
            <section>
            <TaskUpdates/>
            </section>
        </div>

        </Col>
        <Col size="md-4 sm-12">
        <div   style={{margin:"10px" }} className="chat">
          <header>
            <h3 style={{textAlign:"center"}}>Tasks Assigned to You</h3>
          </header>
          <section>
          <MyTasks userInfo={props.userData.firstName} />
            </section>
            </div>
        </Col>
        <Col size="md-4 sm-12">
          <div>
          <Chat className={chat} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default Person;
