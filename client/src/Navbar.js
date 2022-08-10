import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar({currentUser}) {



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
      <Nav.Item>
        <Nav.Link  href='/user-login'>
        Login
        </Nav.Link>
      </Nav.Item>
      <p id='welcome' >Welcome {currentUser.username}</p>

    </Nav>
    </>
      );
}

export default Navbar;