import React from "react";
import ProjectChart from "./ProjectChart";
import ProjectShowTaskCard from "./ProjectShowTaskCard";

export default function ProjectShowCard({project, onClickEditButton}){
    //if no project, return null to avoid no ref error on first load
    
    if (!project){return null}


    const tasks = project.tasks.map(e=><ProjectShowTaskCard task={e} key={e.id}/>)
    
    
    
    return(
        
        <span>
            
            <div className="bio-box">
                <p>Project Name: {project.name}</p>
                <p>Details: {project.details}</p>
                <p>Budget: ${project.budget}</p>
                <p>Due Date: {project.duedate}</p>

           </div>
           <button onClick = {onClickEditButton}>Edit Project Details! </button>
           <div>
            <ProjectChart/>
            {tasks}
           </div>
        </span>
    )
}