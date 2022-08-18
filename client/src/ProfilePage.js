import React,{useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import ProfileCard from './ProfileCard';


function ProfilePage({props}) {

  let userId = useParams()
  
  const [selectedUser, setSelectedUser] = useState(null)
  useEffect(()=>{
    fetch(`/users/${userId.id}`).then(r=>r.json()).then(d=>setSelectedUser(d))
  },[])

  return (
    <>
    {/* conditional logic below to avoid loading errors */}
   {selectedUser ? <ProfileCard user={selectedUser}/> : null}
   </>
  );
}


export default ProfilePage;