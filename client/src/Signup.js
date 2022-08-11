
import React, {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup({setCurrentUser}) {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({username: null, bio:null,image:null,age:null,password:null})



    const forms = Object.keys(newUser).map(e=>
        <Form.Group className="mb-3" controlId={e}>
        <Form.Label>{e}</Form.Label>
        <Form.Control 
        onChange={handleChange} 
        type="{e}" 
        placeholder={`Enter ${e}`}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
    )


    function handleChange(event){
        event.preventDefault()
        let prosUser = {...newUser}
        newUser[event.target.id] = event.target.value
        setNewUser(prosUser)
    }

    function handleSubmit(event){
        event.preventDefault()

                    fetch('/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
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
console.log(newUser)


  return (
    <Form onSubmit={handleSubmit} style={{'maxWidth': '50%'}}>
        {forms}
      {/* <Form.Group className="mb-3" controlId="username">
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
      </Form.Group> */}


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );
}

export default Signup;