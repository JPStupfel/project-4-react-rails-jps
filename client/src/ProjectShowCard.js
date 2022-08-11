import React from "react";
// import ProjectChart from "./ProjectChart";

export default function ProjectShowCard({project}){

    return(
        
        <span>
            
            <div className="bio-box">
                <p>Project Name: {project.name}</p>
                <p>Details: {project.details}</p>
                <p>Budget: ${project.budget}</p>
                <p>Due Date: {project.duedate}</p>
           </div>

           <div>
            {/* <ProjectChart/> */}
            <>Team Mate List will go below</>
           </div>
        </span>
    )
}