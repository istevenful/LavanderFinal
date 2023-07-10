import React from 'react';

import './App.css';
import Home from './Home';
import Connection from './Connection'
import Profile from './Profile'
import Chat from './Chat'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <div className='Lavender-tm'>
        <img className='logo' src="/LavenderLogo.png" alt="Lavender Logo"></img>
      </div>
      <div className='app-container'>
        <div className='app-containerBackground'>
        <Router>
          <Routes>
            <Route exact path="/LavanderFinal" element={<Home />} />
            <Route exact path="/LavanderFinal/connections" element={<Connection />} />
            <Route exact path="/LavanderFinal/profile" element={<Profile />} />
            <Route exact path="/LavanderFinal/chat" element={<Chat />} />
          </Routes>
        </Router>
        </div>

        

      </div>
      <div className='bg'></div>
    </div>
  );
}

export default App;
