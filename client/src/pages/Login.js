//import React from "react";
import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import API from "../utils/API"
// import { set } from "mongoose";

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setLoginCredentials({
      ...loginCredentials,
      [name]: value
    })
    console.log(loginCredentials)
  }

  const handleSubmit = e => {
    API.findByEmail(loginCredentials)
    .catch(err => {console.log(err)})
  }

  return (
    <div>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Email" onChange={handleChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">Login</Button>
    </Form>
    <p>Don't have an account? <Button variant="primary" type="submit">Create Account</Button></p>
    </div>
  );
}

export default Login;