import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import API from "../utils/API";


function Login() {
  const [userInputData, setUserInputData] =  useState({})

  const handleInputChange = e => {
      const { name, value } = e.target
      setUserInputData({
          ...userInputData,
          [name]: value
      })
      console.log(userInputData)
  }

  useEffect(() => console.log("State is: ", userInputData), [userInputData])
  
  const handleSubmit = e => {
      e.preventDefault()
      console.log("file: CreateAccount.js")

      API.createUser(userInputData)
          .catch(err => console.log(err))
  }

  // Create account states and hooks.


  return (
    <Container>
      <Row>
        <Col>
          <h2>Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="password" />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit">Login</Button>
        </Col>

        <Col>
          <h2>Sign Up</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" type="username" placeholder="username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>First name</Form.Label>
              <Form.Control name="first-name" type="username" placeholder="first name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Last name</Form.Label>
              <Form.Control name="last-name" type="username" placeholder="last name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control name="confirm-password" type="password" placeholder="confirm password" />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit">Sign Up</Button>

        </Col>
      </Row>
    </Container>
  );
}


export default Login;