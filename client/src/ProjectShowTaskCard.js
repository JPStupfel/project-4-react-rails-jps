
import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectShowTaskCard({task, handleCheckBox}) {
  const alertClicked = () => {
    // alert('You clicked the third ListGroupItem');
  };

  const [isEdit, setIsEdit] = useState(null)

  const [updaterTask, setUpdaterTask] = useState(task)



  const formReplacer =  
    <form onSubmit={handleSubmit} className='taskItem'>
    <input
    id={isEdit}
    value={updaterTask[isEdit]}
    onChange={handleChange}
    ></input>
  </form>

  const nameLi =  <li 
                    onClick={(e)=>{setIsEdit(e.target.id)}} 
                    id='name' 
                    className='taskItem'
                    >{updaterTask.name}</li> 
  const usernameLi =  <li 
                    id='username' 
                    className='taskItem'
                        >Assigned to: {updaterTask.username}</li> 


  const spanListItems = (
            <ul className='tasklist'>

                {isEdit=='name' ? formReplacer : nameLi }     

                {usernameLi}  

                <li onClick={(e)=>{handleCompletedClick(e)}} className='taskItem'>{updaterTask.is_complete ? 'Complete' : 'Not Complete'}</li>

                <input id={task.id} onChange={(e)=>handleCheckBox(e)} className='checkbox' type="checkbox" />

            </ul>
  )

  function handleCompletedClick(event){
    const editTask = {...updaterTask}
    editTask['is_complete'] = !editTask['is_complete']
    setUpdaterTask(editTask)
    handlePost(editTask)

  }

  function handleChange(e){
    const editTask = {...updaterTask}
    editTask[e.target.id] = e.target.value
    setUpdaterTask(editTask)

  }

  function handleSubmit(event){
    event.preventDefault();
    setIsEdit(null)
    console.log(updaterTask);
    handlePost(updaterTask)
  }

  function handlePost(task){
  fetch(`/tasks/${updaterTask.id}`, {
    method: 'PATCH', // or 'PUT'
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
      <ListGroup.Item action onClick={alertClicked}>
       {spanListItems}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ProjectShowTaskCard;