// import { response } from 'express';
import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap"
import API from "../utils/API"

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
        console.log("file: . Line: 24.")
        const data = {
            firstName: userInputData.firstName,
            lastName: userInputData.lastName,
            userName: userInputData.userName,
            email: userInputData.email,
            password: userInputData.password
        }

        API.createUser(data)
            .then(response => {
                response.json(response)
            })
            .catch(err => console.log(err))
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="firstName" placeholder="First Name" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastName" placeholder="Last Name" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" placeholder="Email" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control name="userName" placeholder="username" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={handleInputChange}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Create Account
      </Button>
    </Form>
  );
}

export default CreateAccount;