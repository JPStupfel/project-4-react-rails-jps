
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {

    const [cred, setCred] = useState({password: '', username: ''})

    function handleChange(event){
        event.preventDefault()
        let newCred = {...cred}
        newCred[event.target.id] = event.target.value
        setCred(newCred)
    }
    
  return (
    <Form style={{'maxWidth': '50%'}}>

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