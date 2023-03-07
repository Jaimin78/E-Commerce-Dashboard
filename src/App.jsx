import './App.css';
import Navigation from './Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element= {<h1>Home</h1>} />
          <Route path="/profile" element= {<h1>Profile</h1>} />
          <Route path="/add" element= {<h1>Product add</h1>} />
          <Route path="/update" element= {<h1>Product update</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;