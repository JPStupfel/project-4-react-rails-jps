import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UserCard from './UserCard';

function TeamCardContainer({teamList}) {

  const cards = teamList.map(e=><UserCard key={e.id} user={e}/>)
    
  return (

    <CardGroup>

      {cards}


    </CardGroup>

  );
}

export default TeamCardContainer;