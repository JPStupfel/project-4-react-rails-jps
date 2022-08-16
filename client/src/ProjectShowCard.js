import React, {useState} from "react";
import ProjectChart from "./ProjectChart";
import ProjectShowTaskCard from "./ProjectShowTaskCard";

export default function ProjectShowCard({project, onClickEditButton}){
    //will contain an array of id's that are checked
    const [checkedTasks, setCheckedTasks] = useState([])

    //if no project, return null to avoid no ref error on first load
    if (!project){return null}


    const tasks = project.tasks.map(e=><ProjectShowTaskCard task={e} key={e.id} handleCheckBox={handleCheckBox}/>)
    
    function handleCheckBox(event){
        const newCheckedTasks = [...checkedTasks]
        newCheckedTasks.push(event.target.id)
        setCheckedTasks(newCheckedTasks)
    }
    
    
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
                <div>
                    {checkedTasks.length ? <button>Delete Checked Tasks?</button> : null}
                    {tasks}
                </div>
           </div>
        </span>
    )
}