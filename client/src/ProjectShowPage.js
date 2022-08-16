import React, {useState, useEffect} from 'react';
import { useParams, use } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ProjectCard from './ProjectCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectShowCard from './ProjectShowCard';
import ProjectEditForm from './ProjectEditForm'


function ProjectShowPage({}) {

  let projectId = useParams()
 
 
  const [selectedProject, setSelectedProject] = useState(null)
  const [isEditProject, setIsEditProject] = useState(false)

  const showProject = 
  <ProjectShowCard 
  onClickEditButton={onClickEditButton} 
  project={selectedProject}/> 

  const editForm = <ProjectEditForm handleEditProject={handleEditProject} setIsEditProject={setIsEditProject} project={selectedProject}/>
   

  useEffect(()=>{
    fetch(`/projects/${projectId.id}`).then(r=>r.json()).then(d=>setSelectedProject(d))
  },[])
   
  function onClickEditButton(event){
    setIsEditProject(prev=>!prev)
  }

  //map through new project and update keys, because will want tasks to ermain
  function handleEditProject(updatedProject){
    const updatedProjectWithTasks = {...selectedProject}
    
    Object.keys(updatedProject).forEach(e=>updatedProjectWithTasks[e]=updatedProject[e])
     setSelectedProject(updatedProjectWithTasks)
  }


  return (<>{isEditProject ? editForm : showProject}</>)

}
export default ProjectShowPage;