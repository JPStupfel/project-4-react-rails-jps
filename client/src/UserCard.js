import React from 'react';
import Card from 'react-bootstrap/Card';
import {BrowserRouter, Routes,Route,} from "react-router-dom";



export default function({user}){

  function handleClick(event){
    console.log('click!')
  }

    return(
      <Card id={user.id}>
        <Card.Img variant="top" src={user.image} />
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                   Bio: {user.bio} 
                </Card.Text>
                <Card.Text>
                    Age: {user.age}
                </Card.Text>
          </Card.Body>
        <Card.Footer onClick={handleClick}>
          <small className="text-muted">{`Click to view Profile!`}</small>
        </Card.Footer>
      </Card>
    )
}