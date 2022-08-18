
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProjectAddForm({handleAddProject, setIsAddProject}) {

    const [newProject, setNewProject] = useState({name: null, details:null,duedate:null,budget:null})


    // dry version of each input based on all the keys in newProject
    const forms = Object.keys(newProject).map(e=>{
       return ( <Form.Group key={e} className="mb-3" controlId={e}>
        <Form.Label>{e}</Form.Label>
        <Form.Control 
        onChange={handleChange} 
        type="{e}" 
        placeholder={`Enter ${e}`}/>
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
                    fetch('/projects', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProject),
            })
            .then((response) =>response.json())
            .then((data) => {
            handleAddProject(data);
            setIsAddProject(prev=>!prev)
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

export default ProjectAddForm;