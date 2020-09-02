import React from 'react';
import Hillbrewingco from './Hillbrewingco';
import Dashboard from './Dashboard';
import Lo70s from './Lo70s';
import CRM from './CRM';


const Projects = () => {
    return (
        <section id="projects">
            <div className="section">
                <h1 className="title">My Projects</h1>
                <div className="row">
                    <Hillbrewingco />
                    <Dashboard />
                </div>
                <div className="row">
                    <Lo70s />
                    <CRM />
                </div>

            </div>
        </section>
    )
}


export default Projects;
