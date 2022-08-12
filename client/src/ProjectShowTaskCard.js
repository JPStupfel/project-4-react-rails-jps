import React from "react";

export default function ProjectShowTaskCard({task}){
    
    return(
        <div>
        <li>Task name: {task.name}</li>
        <li>Assigned to: {task.username}</li>
        </div>
    )
}