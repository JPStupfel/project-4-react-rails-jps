import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ProjectCard from './ProjectCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectShowCard from './ProjectShowCard';


function ProjectShowPage({projectList}) {

  // const cards = teamList.map(e=><>Profile Page</>)
  let projectId = useParams()
  
  const selectedProject = projectList.find(e=>e.id == projectId.id)

  return (
    <>
    {/* conditional logic below to avoid loading errors */}
   {selectedProject ? <ProjectShowCard project={selectedProject}/> : null}
    </>
  );
}

export default ProjectShowPage;