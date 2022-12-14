import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<><Header/><Home /></>}/>
          </Routes>
        </div>

    </Router>
  );
}

export default App;
