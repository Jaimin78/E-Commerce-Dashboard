import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Register from './Register';
import PrivateComponent from './PrivateComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<PrivateComponent />} >
           <Route path="/" element= {<h1>Home</h1>} />
           <Route path="/profile" element= {<h1>Profile</h1>} />
           <Route path="/add" element= {<h1>Product add</h1>} />
           <Route path="/update" element= {<h1>Product update</h1>} />       
           <Route path="/logout" element= {<h1>Logout</h1>} />
          </Route>
  
          <Route path="/login" element= {<h1>Login</h1>} />
          <Route path="/signup" element= {<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;