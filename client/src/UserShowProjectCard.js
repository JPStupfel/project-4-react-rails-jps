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
        {/* <Card.Img variant="top" src={project.image} /> */}
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
                {/* <Card.Text>
                   Details: {project.details} 
                </Card.Text>
                <Card.Text>
                    Budget: ${project.budget}
                </Card.Text>
                <Card.Text>
                    Due Date: {project.duedate}
                </Card.Text>
                <Card.Text>
                <p>{project.tasksRemaining.remaining} tasks out of {project.tasksRemaining.total} tasks remaining.</p>
                </Card.Text> */}

          </Card.Body>
        <Card.Footer onClick={handleClick}>
          <small className="text-muted">{`Click to view Project!`}</small>
        </Card.Footer>
      </Card>
    )
}