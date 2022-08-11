import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UserCard from './UserCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfileCard from './ProfileCard';


function ProfilePage({teamList}) {

  // const cards = teamList.map(e=><>Profile Page</>)
  let userId = useParams()
  
  const selectedUser = teamList.find(e=>e.id == userId.id)

  return (
    <>
    {/* conditional logic below to avoid loading errors */}
   {selectedUser ? <ProfileCard user={selectedUser}/> : null}
    </>
  );
}

export default ProfilePage;