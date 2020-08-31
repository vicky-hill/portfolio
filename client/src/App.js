import React, { Fragment } from 'react';
import Landing from './components/layout/Landing';
import Sidebar from './components/layout/Sidebar';
import Projects from './components/sections/projects/Projects';
import './main.scss';

function App() {
  return (
    <Fragment> 
      <Sidebar />
      <div className="main">
      <Landing />
     
      
        <Projects />
      </div>
      
    </Fragment>
  );
}

export default App;
