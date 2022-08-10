import React, {useState} from 'react';
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
  // const [currentUser, setCurrentUser] = useState('')

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/team" element={<Teampage/>} />
        <Route path="/projectlist" element={<>projectlist</>} />
        <Route path="/user-login" element={<Login />} />

      </Routes>
    

    </div>
  );
}

export default App;
