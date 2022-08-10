import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar() {
    return (
        <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/team">View Team</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projectlist" >
        projectlist
        </Nav.Link>
      </Nav.Item>
    </Nav>
      );
}

export default Navbar;