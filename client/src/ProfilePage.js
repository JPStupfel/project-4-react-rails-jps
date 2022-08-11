import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UserCard from './UserCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function ProfilePage({}) {

  // const cards = teamList.map(e=><>Profile Page</>)
  let userId = useParams()
  return (

    <CardGroup>
      <Row xs={2} md={4} lg={6} className="g-4">
       <div>Profile for user no. {userId.id}</div>
      </Row>
    </CardGroup>

  );
}

export default ProfilePage;