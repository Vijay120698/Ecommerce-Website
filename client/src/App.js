import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/main';
import Payment from './components/Payment';
import Electronics from './components/Electronics';



function App() {
  return (
    <div className="App">
      
      <Router>
        
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/electronics" element={<Electronics />} />
        
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
