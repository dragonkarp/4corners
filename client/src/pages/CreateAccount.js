import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap"

function CreateAccount() {
    //const [newUserData, setNewUserData] = useState({})

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

        
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="first-name" placeholder="First Name" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="last-name" placeholder="Last Name" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" placeholder="Email" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" placeholder="username" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" password="password" placeholder="Password" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control password="confirm-password" placeholder="Password" onChange={handleInputChange}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Create Account
      </Button>
    </Form>
  );
}

export default CreateAccount;