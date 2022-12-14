import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import UserShowProjectCard from './UserShowProjectCard';

function UserShowProjectContainer({projectList}) {

  const cards = projectList.length ? projectList.map(e=><UserShowProjectCard key={e.id} project={e}/>) : null
    
  return (

    <CardGroup>
      <Row xs={2} md={4} lg={6} className="g-4">
       {cards}
      </Row>
    </CardGroup>

  );
}

export default UserShowProjectContainer;