import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Teampage from './Teampage';
import Login from './Login';
import Signup from './Signup';
import ProfilePage from './ProfilePage';

function App() {
  const [currentUser, setCurrentUser] = useState({id: null})
  const [teamList, setTeamList] = useState([])

    //fetch users
    useEffect(
      ()=>{
          fetch('/users').then(r=>r.json()).then(d=>setTeamList(d)).catch(r=>console.log(r))
      },[]
  )
  //set current user by fetch request checked against session on backend
  useEffect(()=>{
    fetch('/me').then(r=>r.json()).then(d=>setCurrentUser(d))
  }, [])


  return (
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />

      <Routes>

        {/* allow these routes whether logged in or not */}
        <Route path="/" element={<>Home</>} />
      
        
        {/* conditionally render routes */}
        { currentUser.id ?
        // if logged in, allow these routes
          <>
        <Route path="/team" element={ <Teampage teamList={teamList} setTeamList={setTeamList}/>} />
        <Route path="/team/:id" element={ <ProfilePage teamList={teamList}/>} />
        <Route path="/projectlist" element={<>projectlist</>} />
        </>
        // if not logged in allow these route
        :
        <>
        <Route path="/*" element={<h1>Log in first!</h1>} />
        <Route path="/user-login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/user-signup" element={<Signup setCurrentUser={setCurrentUser} />} />

        </>
        }   
      </Routes>
    

    </div>
  );
}

export default App;
