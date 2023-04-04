import React, {useState, useEffect} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/')
    }
  })
  
  const login = async () => {
    console.log(email, password);
    let result = await fetch('https://e-commerce-dashboard-backend.jaiminsuthar.repl.co/api/user/login',
  {
    method:'post',
    body: JSON.stringify({email, password}),
    headers: {
      'Content-Type':'application/json'
    }
  })
    result = await result.json()
    if(result.error){    
      alert("User not found");
    }else{
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/');
    }
  
  }
  
  return(
    <>
     <Container className="my-4">
          <h1>Login</h1>
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