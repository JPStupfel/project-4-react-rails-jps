import React from "react";
import ProjectChart from "./ProjectChart";
import ProjectShowTaskCard from "./ProjectShowTaskCard";

export default function ProjectShowCard({project}){
    
    const tasks = project.tasks.map(e=><ProjectShowTaskCard task={e} key={e.id}/>)

    return(
        
        <span>
            
            <div className="bio-box">
                <p>Project Name: {project.name}</p>
                <p>Details: {project.details}</p>
                <p>Budget: ${project.budget}</p>
                <p>Due Date: {project.duedate}</p>
           </div>

           <div>
            <ProjectChart/>
            {tasks}
           </div>
        </span>
    )
}