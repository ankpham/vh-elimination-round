import React, {useRef} from 'react';
import {Routes, BrowserRouter as Router, Route} 
from 'react-router-dom';

import './style/style.css'

import EliminationRound from './pages/EliminationRound';
import ViewQuestion from './pages/ViewQuestion';
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';

const App = () => {   
  const page = useRef(null);
  const fullScreenButton = useRef(null);

  const fullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
      document.documentElement.msRequestFullscreen();
    }
  }

  return (
    <div ref={page} className="app">
    <Router>
      <Routes>
        <Route path="/" element={<EliminationRound/>} exact/>
        <Route path="/view-question/:grade/:category" element={<ViewQuestion/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/admin/2iu80qpo0w23/" element={<Admin/>}/>
      </Routes>
    </Router>
    <button ref={fullScreenButton} style={{right: '0', display: 'flex', position: 'absolute'}} onClick={() => fullscreen()}>Full Screen</button>
    </div>

  );
}

export default App;
