import React, {useRef, useEffect} from 'react';
import {Routes, BrowserRouter as Router, Route} 
from 'react-router-dom';

import './style/style.css'

import Home from './pages/Home';
import ViewQuestion from './pages/ViewQuestion';
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
    <div ref={page} class="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/view-question/:level/:category" element={<ViewQuestion/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
    <button ref={fullScreenButton} style={{right: '0', display: 'flex', position: 'absolute'}} onClick={() => fullscreen()}>Full Screen</button>
    </div>

  );
}

export default App;
