
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup({setCurrentUser}) {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({username: null, bio:null, image:null,age:null,password:null,password_confirmation:null})


    // dry version of each input based on all the keys in newUser
    const forms = Object.keys(newUser).map(e=>{
       return ( <Form.Group className="mb-3" controlId={e}>
        <Form.Label>{e}</Form.Label>
        <Form.Control 
        onChange={handleChange} 
        type={ e.includes('password') ? 'password' : `${e}` }
        placeholder={`Enter ${e}`}
        type="text"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>)
    }
    )


    function handleChange(event){
        event.preventDefault()
        let prosUser = {...newUser}
        prosUser[event.target.id] = event.target.value
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


  return (
    <Form onSubmit={handleSubmit} style={{'maxWidth': '50%'}}>
        {forms}
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>

  );
}

export default Signup;