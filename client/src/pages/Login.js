import React from "react";
import { Form, Button } from "react-bootstrap"

function Login() {
  return (
    <div>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">Login</Button>
    </Form>
    <p>Don't have an account? <Button variant="primary" type="submit">Create Account</Button></p>
    </div>
  );
}

export default Login;