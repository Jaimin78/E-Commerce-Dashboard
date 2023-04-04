import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login')
  }

  return (
    <>
      <Navbar collapseOnSelect bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>E - Commerce Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mt-3">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              <Nav.Link as={Link} to="/add">Product Add</Nav.Link>
              <Nav.Link as={Link} to="/update">Product Update</Nav.Link>
              <div className="btn-group">
                {auth ?
                  <Nav.Link as={Link} to="/signup" className="py-2 px-1"><Button variant="danger" onClick={logout}>Logout</Button></Nav.Link>
                  :
                  <>
                    <Nav.Link as={Link} to="/login" className="py-2 px-1"><Button variant="success">Login</Button></Nav.Link>
                    <Nav.Link as={Link} to="/signup" className="py-2 px-1"><Button variant="primary">SignUp</Button></Nav.Link>
                  </>
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;