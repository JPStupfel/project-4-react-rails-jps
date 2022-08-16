
import React, {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProjectEditForm({project, setIsEditProject, handleEditProject}) {
    // const navigate = useNavigate()

    const [newProject, setNewProject] = useState({name: project.name, details:project.details ,duedate:project.duedate,budget:project.budget})


    // dry versino of each input based on all the keys in newProject
    const forms = Object.keys(newProject).map(e=>{
       return ( <Form.Group key={e} className="mb-3" controlId={e}>
        <Form.Label>{e}</Form.Label>
        <Form.Control 
        onChange={handleChange} 
        type="{e}" 
        placeholder={newProject[e]}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>)
    }
    )


    function handleChange(event){
        event.preventDefault()
        let prosProject = {...newProject}
        prosProject[event.target.id] = event.target.value
        setNewProject(prosProject)
    }

    function handleSubmit(event){
        event.preventDefault()
                    fetch(`/projects/${project.id}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProject),
            })
            .then((response) =>response.json())
            .then((data) => {
            handleEditProject(data);
            setIsEditProject(prev=>!prev)
            ;
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

export default ProjectEditForm;