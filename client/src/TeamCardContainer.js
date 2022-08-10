import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UserCard from './UserCard';

function TeamCardContainer() {

    
  return (

    <CardGroup>

        <UserCard/>

        <UserCard/>

        <UserCard/>


    </CardGroup>

  );
}

export default TeamCardContainer;