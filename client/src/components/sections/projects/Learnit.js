import React from 'react';
import learnit from '../../../images/Projects/learnit.png';

const Learnit = () => {
    return (
        <div className="col project">
           <a target="_blank" href="https://www.learnit.ltd"><img class="screenshot" src={learnit} alt="" /></a>
            <h3>Learn It</h3>
            <p>Responsible for the design, development, and maintenance of the Lo70s homepage. The website was built with
        Wordpress and the Divi Theme.</p>
            <p><span id="createdwith">Created with </span><span id="tools">&nbsp;Node.js, Express, MongoDB, React.js, Redux, Sass</span></p>
            <a target="_blank" href="https://www.learnit.ltd"><button id="lo70s">LIVE VERSION</button></a>
            <a target="_blank" href="https://github.com/vickyungemach/learnit"><button class="hillbrewing-btn" id="github"> GITHUB</button></a>
        </div>
    )
}


export default Learnit;