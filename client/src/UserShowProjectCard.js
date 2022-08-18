import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



export default function UserShowProjectCard({project}){

  let navigate = useNavigate();

  function handleClick(event){
    navigate(`/projectlist/${project.id}`);
  }

    return(
      <Card id={project.id}>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
          </Card.Body>
        <Card.Footer onClick={handleClick}>
          <small className="text-muted">{`Click to view Project!`}</small>
        </Card.Footer>
      </Card>
    )
}