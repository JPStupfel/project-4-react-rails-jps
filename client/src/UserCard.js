import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



export default function UserCard({user}){

  let navigate = useNavigate();

  function handleClick(event){
    navigate(`/team/${user.id}`);
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