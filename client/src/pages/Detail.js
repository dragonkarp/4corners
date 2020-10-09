import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {

  const [task, setTask] = useState({})

  // When this component mounts, grab the task with the _id of props.match.params.id
  // e.g. localhost:3000/tasks/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {

    API.getTask(id)
    
    .then(res => setTask(res.data))
      .catch(err => console.log(err));
  }, [id])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>

                {task.taskname} assigned to 
                
                {/* {task.user} */}


              </h1>
            </Jumbotron>
          </Col>
        </Row>
    
        <Row>
          <Col size="md-2">

            <Link to="/">← Back to Tasks</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
