import React, {useRef} from 'react';
import {Routes, BrowserRouter as Router, Route} 
from 'react-router-dom';

import './style/style.css'

import Home from './pages/Home';
import SelectGrade from './pages/SelectGrade';
import SelectCategoryAndPoints from './pages/SelectCategoryAndPoints';
import ViewQuestion from './pages/ViewQuestion';

//import audio from './assets/click-sound-effect.mp3';

const App = () => {   
  const page = useRef(null);
  const fullScreenButton = useRef(null);

  
  const fullscreen = () => {
    if (page.current.requestFullscreen) {
      page.current.requestFullscreen();
    } else if (page.current.webkitRequestFullscreen) { /* Safari */
      page.current.webkitRequestFullscreen();
    } else if (page.current.msRequestFullscreen) { /* IE11 */
      page.current.msRequestFullscreen();
    }
  }
/*
  let usedQuestions = {
    "mg": [[],[],[],[],[]],
    "vl": [[],[],[],[],[]],
    "1": [[],[],[],[],[]],
    "2": [[],[],[],[],[]],
    "3": [[],[],[],[],[]],
    "4": [[],[],[],[],[]],
    "5": [[],[],[],[],[]],
    "6": [[],[],[],[],[]],
    "7": [[],[],[],[],[]]
  }*/
  

  return (
    <div ref={page} className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/select-grade" element={<SelectGrade/>}/>
        <Route path="/select-category-and-points/:grade" element={<SelectCategoryAndPoints/>}/>
        <Route path="/view-question/:grade/:category/:points" element={<ViewQuestion/>}/>
      </Routes>
    </Router>
    <button ref={fullScreenButton} style={{right: '0', display: 'flex', position: 'absolute'}} onClick={() => fullscreen()}>Full Screen</button>
    </div>
  );
}

export default App;
