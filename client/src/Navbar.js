import {Routes, Route, useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar({currentUser, setCurrentUser}) {

  const navigate = useNavigate()

  function handleLogout(){
    fetch('/logout', {
      method: 'DELETE'}).then(setCurrentUser({id:'0'})).then(navigate('/'))
      
  }

    return (
      <>
        <Nav variant="tabs" >
      <Nav.Item>
        <Nav.Link  href='/'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href='/team' >Team</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href='/projectlist'>
        projectlist
        </Nav.Link>
      </Nav.Item>
        {currentUser.id  ?
        <div id='welcome' >Welcome {currentUser.username}
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div> 
      :     
        <Nav.Item>
          <Nav.Link  href='/user-login'>
          Login
          </Nav.Link>
        </Nav.Item> 
        }

    </Nav>
    </>
      );
}

export default Navbar;