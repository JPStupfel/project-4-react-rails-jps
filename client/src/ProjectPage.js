import React, { useState} from "react";
import ProjectCardContainer from "./ProjectCardContainer";
import ProjectAddForm  from "./ProjectAddForm"

export default function ProjectPage({projectList, setProjectList, handleAddProject}){

const [isAddProject, setIsAddProject]=useState(false)


return(
<>
{
    isAddProject ? 
    <ProjectAddForm setIsAddProject={setIsAddProject} handleAddProject={handleAddProject}/>
    : 
    <button onClick={()=>setIsAddProject(prev=>!prev)}>Add Project!</button>
}
    <ProjectCardContainer projectList={projectList}/>
</>
)
}