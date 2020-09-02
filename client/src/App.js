import React, { Fragment, useEffect } from 'react';
import Landing from './components/layout/Landing';
import Sidebar from './components/layout/Sidebar';
import Projects from './components/sections/projects/Projects';
import Resume from './components/sections/resume/Resume';
import './main.scss';
import scrollSpy from './utils/scrollSpy';
import Contact from './components/sections/contact/Contact';

function App() {
  useEffect(() => {
    scrollSpy();
  }, []);

  return (
    <Fragment>
      <Sidebar />
      <div className="main" id="main">
        <Landing />
        <Projects />
        <Resume />
        <Contact />
      </div>

    </Fragment>
  );
}

export default App;
