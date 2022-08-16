
import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectShowTaskCardAdder({}) {


  // const [isEdit, setIsEdit] = useState(null)

  const [updaterTask, setUpdaterTask] = useState(
    {
    "name": "",
    "user_id": '',
    "project_id": '',
    "is_complete": false}
  )



  // const formReplacer =  
  //   <form onSubmit={handleSubmit} className='taskItem'>
  //   <input
  //   // id={isEdit}
  //   value={updaterTask['name']}
  //   onChange={handleChange}
  //   ></input>
  // </form>

  // // const nameLi =  <li 
  // //                   onClick={(e)=>{setIsEdit(e.target.id)}} 
  // //                   id='name' 
  // //                   className='taskItem'
  // //                   >{updaterTask.name}</li> 
  // // const usernameLi =  <li 
  // //                   id='username' 
  // //                   className='taskItem'
  // //                       >Assigned to: {updaterTask.username}</li> 


  const spanListItems = (
            <form className='tasklist'>

                <input id='name' onChange={(e)=>handleChange(e)}/>
                <input id='user' onChange={(e)=>handleChange(e)}  />
                <input id='is_complete'onChange={(e)=>handleChange(e)} />

            </form>
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
    // setIsEdit(null)
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
      <ListGroup.Item>
       {spanListItems}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ProjectShowTaskCardAdder;