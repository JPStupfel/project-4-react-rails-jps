import React, {useState, useEffect} from "react";
import ProjectChart from "./ProjectChart";
import ProjectShowTaskCard from "./ProjectShowTaskCard";
import ProjectShowTaskCardAdder from "./ProjectShowTaskCardAdder";

export default function ProjectShowCard({project, onClickEditButton, teamList}){
    //will contain an array of id's that are checked
    const [checkedTasks, setCheckedTasks] = useState([])
    const [excludeTasks, setExcludeTasks] = useState([])
    const [taskList, setTaskList]=useState(project.tasks)

  

    const tasks = taskList.filter(e=>excludeTasks.includes(e.id)==false)
    

    const tasksCards = tasks.map(e=><ProjectShowTaskCard task={e} key={e.id} handleCheckBox={handleCheckBox}/>)
    
    function handleCheckBox(event){
        const newCheckedTasks = [...checkedTasks]
        newCheckedTasks.push(event.target.id)
        setCheckedTasks(newCheckedTasks)
    }

    function handleDeleteTasks(task_id){
        fetch(`/tasks/${task_id}`, {method:'DELETE'})
        .then(
            setExcludeTasks(prev=>[...prev, parseInt(task_id,10)]))
            .then(setCheckedTasks([])).catch(e=>console.log(e))
    }

    function handleAddTask(task){
       const newTaskList = [...taskList, task]
       setTaskList(newTaskList)
       console.log(task)
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
                    {checkedTasks.length ? <button onClick={()=>checkedTasks.forEach(e=>handleDeleteTasks(e))}>Delete Checked Tasks?</button> : null}
                    
                    {tasksCards}
                    <ProjectShowTaskCardAdder
                    project={project}
                    teamList={teamList}
                    handleAddTask={handleAddTask}/>


                </div>
           </div>
        </span>
    )
}