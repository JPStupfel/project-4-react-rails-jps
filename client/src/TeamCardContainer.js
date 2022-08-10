import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UserCard from './UserCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function TeamCardContainer({teamList}) {

  const cards = teamList.map(
    e=>
    
    <UserCard key={e.id} user={e}
    
    />)
    
  return (

    <CardGroup>
      <Row xs={2} md={4} lg={6} className="g-4">
      {cards}
      
      </Row>


    </CardGroup>

  );
}

export default TeamCardContainer;