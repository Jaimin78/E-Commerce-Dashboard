import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = () => { 
  const auth = localStorage.getItem('user');
  return(
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>E - Commerce Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
             <Link to="/">Home</Link>          
             <Link to="/profile">Profile</Link>      
             <Link to="/add">Product Add</Link>           
             <Link to="/update">Product Update</Link> 
             <div className="btn-group">    
               { auth ? null:
                 <Link to="/login" className="py-2 px-1"><Button variant="success">Login</Button></Link>
               }
               { auth ?
                <Link to="/logout" className="py-2 px-1"><Button variant="danger">Logout</Button></Link>
                 :<Link to="/signup" className="py-2 px-1"><Button variant="primary">SignUp</Button></Link>
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