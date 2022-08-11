import React from "react";
// import ProjectChart from "./ProjectChart";

export default function ProjectShowCard({project}){

    return(
        
        <span>
            <img src={project.image} />
            <div className="bio-box">
                <p>Bio: {project.bio}</p>
                <p>Age: {project.age}</p>
           </div>

           <div>
            {/* <ProjectChart/> */}
            <>Project List will go below</>
           </div>
        </span>
    )
}