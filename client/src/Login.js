
import React, {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({setCurrentUser}) {
    const navigate = useNavigate()
    const [cred, setCred] = useState({password: '', username: ''})

    function handleChange(event){
        event.preventDefault()
        let newCred = {...cred}
        newCred[event.target.id] = event.target.value
        setCred(newCred)
    }

    function handleSubmit(event){
        event.preventDefault()

                    fetch('/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cred),
            })
            .then((response) =>response.json())
            .then((data) => {
            setCurrentUser(data);
            navigate('/');
            })
            .catch((error) => {
            console.error('Errors:', error);
            });
    }

  return (
    <Form onSubmit={handleSubmit} style={{'maxWidth': '50%'}}>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        
        onChange={handleChange} 
        type="username" 
        placeholder="Enter username" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control 
                onChange={handleChange} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;