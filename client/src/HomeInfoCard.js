import ListGroup from 'react-bootstrap/ListGroup';

function HomeInfoCard({teamList, projectList}) {

const completedProjectCount = Object.keys(projectList.filter(e=> e.tasksRemaining['remaining'] == 0)).length

const totalProjects = Object.keys(projectList).length
const totalUsers = Object.keys(teamList).length
const totalBudget = projectList.reduce( (p,c)=> p+ c.budget, 0)

  return (
    <ListGroup>
      <ListGroup.Item>{totalProjects} Active Projects!</ListGroup.Item>

      <ListGroup.Item>{completedProjectCount} Completed Projects!</ListGroup.Item>

      <ListGroup.Item>{totalUsers} Users!</ListGroup.Item>

      <ListGroup.Item>${totalBudget} in budgeted resources!</ListGroup.Item>
    
    </ListGroup>
  );
}

export default HomeInfoCard;