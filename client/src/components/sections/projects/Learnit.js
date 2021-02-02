import React from 'react';
import learnit from '../../../images/Projects/learnit.png';

const Learnit = () => {
    return (
        <div className="col project">
           <a target="_blank" href="https://www.linguar.net"><img class="screenshot" src={learnit} alt="" /></a>
            <h3>Linguar</h3>
            <p>Developed a simple web application for learning and memorizing vocabulary from self-curated vocabulary lists.</p>
            <p><span id="createdwith">Created with </span><span id="tools">&nbsp;Node.js, Express, MongoDB, React.js, Redux, Sass</span></p>
            <a target="_blank" href="https://www.linguar.net"><button id="lo70s">LIVE VERSION</button></a>
            <a target="_blank" href="https://github.com/vickyungemach/learnit"><button class="hillbrewing-btn" id="github"> GITHUB</button></a>
        </div>
    )
}


export default Learnit;
