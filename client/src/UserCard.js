import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function({user}){

    return(
        <Card>
        <Card.Img variant="top" src={user.image} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            {user.bio}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{`Age: ${user.age}`}</small>
        </Card.Footer>
      </Card>
    )
}