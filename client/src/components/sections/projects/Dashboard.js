import React from 'react';
import hillbrewingcodash from '../../../images/Projects/hillbrewingdash.png';

const Dashboard = () => {
    return (
        <div className="col project">
            <img class="screenshot" src={hillbrewingcodash} alt="" />
            <h3>Hill Brewing Co Dashboard</h3>
            <p>Created a REST API to manage the homepage's data and a dashboard where members can create, edit and delete
          recipes displayed on the homepage.</p>
            <p><span id="createdwith">Created with </span><span id="tools">&nbsp;Node.js, Express, MongoDB, React.js</span></p>
            <a target="_blank" href="https://www.hillbrewingco.net/register"><button class="hillbrewing-btn">LIVE VERSION</button></a>
            <a target="_blank" href="https://github.com/vickyungemach/hillbrewingco"><button class="hillbrewing-btn" id="github"> GITHUB</button></a>
        </div>
    )
}


export default Dashboard;
