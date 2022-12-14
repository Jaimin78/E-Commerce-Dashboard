import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import SearchProduct from './SearchProduct'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Protected from './Protected'
function App() {
  return (
    <div>     
     <BrowserRouter>         
        <Routes>
         <Route path="/" element={<Protected Cmp={Home}/>} />
         <Route path="/add" element={<Protected Cmp={AddProduct}/>} />
         <Route path="/update/:id" element={<Protected Cmp={UpdateProduct}/>}/>      
         <Route path="/update" element={<Protected Cmp={UpdateProduct}/>}/>
         <Route path="/search" element={<Protected Cmp={SearchProduct}/>}/>    
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App;