import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Register from './Register';
import PrivateComponent from './PrivateComponent';
import Login from './Login';
import Home from './Home';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<PrivateComponent />} >
           <Route path="/" element= {<Home />} />
           <Route path="/profile" element= {<h1>Profile</h1>} />
           <Route path="/add" element= {<AddProduct />} />
           <Route path="/update/:id" element= {<UpdateProduct />} />       
          </Route>
  
          <Route path="/login" element= {<Login />} />
          <Route path="/signup" element= {<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;