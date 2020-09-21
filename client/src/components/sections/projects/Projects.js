import React from 'react';
import Hillbrewingco from './Hillbrewingco';
import Dashboard from './Dashboard';
import Lo70s from './Lo70s';
import CRM from './CRM';
import CSUDH from './CSUDH';


const Projects = () => {
    return (
        <section className="scrollspy" id="projects">

            <div className="section">
                <h1 className="title">My Projects</h1>
                <div className="row">
                    <Hillbrewingco />
                    <Dashboard />
                </div>
                <div className="row">
                    <CSUDH />
                    <div className="col project"></div>
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
