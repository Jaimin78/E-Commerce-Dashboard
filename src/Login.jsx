import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log(email, password);
  }
  
  return(
    <>
     <Container className="my-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter Email"
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
              />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} 
            />
          </Form.Group>
          <Button variant="primary" type="submit" 
            onClick={login}>
            Login
          </Button>
      </Container>
    </>
  )
}

export default Login;