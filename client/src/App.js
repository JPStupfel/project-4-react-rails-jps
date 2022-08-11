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


function App() {
  const [currentUser, setCurrentUser] = useState({id: null})

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
        <Route path="/user-login" element={<Login setCurrentUser={setCurrentUser} />} />
        
        {/* only allow these routes if logged in */}
        { currentUser.id ?
          <>
        <Route path="/team" element={ <Teampage/>} />
        <Route path="/projectlist" element={<>projectlist</>} />
        </>
        // else allow this route
        :
        <Route path="/*" element={<h1>Log in first!</h1>} />

        }       
      </Routes>
    

    </div>
  );
}

export default App;
