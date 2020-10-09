import React from "react";
import { Form, Button } from "react-bootstrap"

function CreateAccount() {
  return (
    <Form>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="first-name" placeholder="First Name" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="last-name" placeholder="Last Name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="username" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        CreateAccount
      </Button>
    </Form>
    
  );
}

export default CreateAccount;