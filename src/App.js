import Main from './pages/main';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Projects from './pages/projects';
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';
import Project4 from './pages/project4';


function App() {
  return (
    <div>
      <Router>
        <AppComponent />
      </Router>
    </div>
  );
}

function AppComponent() {
  const location = useLocation();
  return (
    <div>
      <Routes location={location}>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project_stuff" element={<Project1/>} />
        <Route path="/project_fitness" element={<Project2/>} />
        <Route path="/project_guitar" element={<Project3/>} />
        <Route path="/door-project" element={<Project4/>} />
      </Routes>
    </div>
  )
}

export default App;
