
import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectShowTaskCardAdder({teamList,project}) {


  // const [isEdit, setIsEdit] = useState(null)

  const [updaterTask, setUpdaterTask] = useState(
    {
    "name": "",
    "user_id": 0,
    "project_id": project.id,
    "is_complete": false}
  )

  const dropDown = 
  <select
        onChange={handleChangeDropDown}
        id='user_id'
  >
    {teamList.map(e=>
            <option 
            key={e.id} 
            value={e.id}
            >{`${e.username}`}</option>)}
    </select>

  const spanListItems = (
            <form onSubmit={handleSubmit} className='tasklist'>

                <input id='name' onChange={(e)=>handleChange(e)}/>
                {dropDown}
                <li onClick={(e)=>{handleCompletedClick(e)}} className='taskItem'>{updaterTask.is_complete ? 'Complete' : 'Not Complete'}</li>

                <button>Add Task!</button>
            </form>
  )

  function handleCompletedClick(event){
    const editTask = {...updaterTask}
    editTask['is_complete'] = !editTask['is_complete']
    setUpdaterTask(editTask)

  }

  function handleChange(e){
    const editTask = {...updaterTask}
    editTask[e.target.id] = e.target.value
    setUpdaterTask(editTask)
  }
  function handleChangeDropDown(e){
    const editTask = {...updaterTask}
    const id = parseInt(e.target.value,10)
    editTask['user_id'] = id
    setUpdaterTask(editTask)
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(updaterTask);
    handlePost(updaterTask)
  }

  function handlePost(task){
  fetch(`/tasks`, {
    method: 'Post', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
    })
    .then((response) =>response.json())
    .then((data) => {
    console.log(data)
    ;
    })
    .catch((error) => {
    console.error('Errors:', error);
    });
  }

  

  return (
    <ListGroup>
      <ListGroup.Item>
       {spanListItems}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ProjectShowTaskCardAdder;