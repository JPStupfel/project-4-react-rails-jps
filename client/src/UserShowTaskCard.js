
import ListGroup from 'react-bootstrap/ListGroup';

function UserShowTaskCard({task}) {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  const spanListItem = (
            <ul className='tasklist'>
                <li className='taskItem'>{task.name}</li>              
                <li className='taskItem'> Assigned to {task.username}</li>
                <li className='taskItem'>{task.is_complete ? 'Complete' : 'Not Complete'}</li>
            </ul>
  )

  return (
    <ListGroup>
      <ListGroup.Item action onClick={alertClicked}>
       {spanListItem}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default UserShowTaskCard;