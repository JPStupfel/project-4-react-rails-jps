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
import ProjectPage from './ProjectPage';
import ProjectShowPage from './ProjectShowPage';
import HomeContainer from './HomeContainer';

function App() {
  const [currentUser, setCurrentUser] = useState({id: null})
  const [teamList, setTeamList] = useState([])
  const [projectList, setProjectList] = useState([])

      //fetch users
      useEffect(
        ()=>{
            fetch('/projects').then(r=>r.json()).then(d=>setProjectList(d)).catch(r=>console.log(r))
        },[currentUser]
    )

    //fetch users
    useEffect(
      ()=>{
          fetch('/users').then(r=>r.json()).then(d=>setTeamList(d)).catch(r=>console.log(r))
      },[currentUser]
  )
  //set current user by fetch request checked against session on backend
  useEffect(()=>{
    fetch('/me').then(r=>r.json()).then(d=>setCurrentUser(d))
  }, [])

  function handleAddProject(newProject){

    const newProjectList = [...projectList, newProject]
    
    setProjectList(newProjectList)
  }

  function onDeleteProject(project_id){
    const newProjectList = projectList.filter(e=>e.id !=project_id)
    setProjectList(newProjectList)
  }

  // conditional if not loaded show loading
  if (currentUser.id && (!teamList.length || !projectList.length)) {return(<>Loading!</>)}

  return (
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />

      <Routes>

        {/* allow these routes whether logged in or not */}
      
        
        {/* conditionally render routes */}
        { currentUser.id ?
        // if logged in, allow these routes
          <>
        <Route path="/" element={<HomeContainer projectList={projectList} teamList={teamList}/>} />
        <Route path="/team" element={ <Teampage teamList={teamList} setTeamList={setTeamList}/>} />
        <Route path="/team/:id" element={ <ProfilePage  teamList={teamList}/>} />
        <Route path="/projectlist" element={<ProjectPage handleAddProject={handleAddProject} projectList={projectList} setProjectList={setProjectList}/>} />
        <Route path="/projectlist/:id" element={ <ProjectShowPage onDeleteProject={onDeleteProject} teamList={teamList} />} />
        {/* <Route path="/projectlist/:id/edit" element={<>let's edit</>} /> */}

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
