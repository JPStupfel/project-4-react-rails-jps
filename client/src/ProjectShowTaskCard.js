
import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectShowTaskCard({task}) {
  const alertClicked = () => {
    // alert('You clicked the third ListGroupItem');
  };

  const [isEdit, setIsEdit] = useState(null)

  const formReplacer =  
  <form onSubmit={(e)=>{e.preventDefault();setIsEdit(null)}} className='taskItem'>
    <input placeholder={task.name}></input>
  </form>

  const nameLi =  <li 
                    onClick={(e)=>{setIsEdit(e.target.id)}} 
                    id='name' 
                    className='taskItem'
                    >{task.name}</li> 

  const spanListItems = (
            <ul className='tasklist'>

                {isEdit=='name' ? formReplacer : nameLi }     

                <li className='taskItem'> Assigned to {task.username}</li>
                <li className='taskItem'>{task.is_complete ? 'Complete' : 'Not Complete'}</li>
            </ul>
  )

  return (
    <ListGroup>
      <ListGroup.Item action onClick={alertClicked}>
       {spanListItems}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ProjectShowTaskCard;