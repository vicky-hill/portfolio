import React from 'react';
import hillbrewingco from '../../../images/Projects/hillbrewingco.png';
import github from '../../../images/Logos/github.png';

const Hillbrewingco = () => {
    return (
        <div className="col project">
            <img class="screenshot" src={hillbrewingco} alt=""/>
            <h3>Hill Brewing Co</h3>
            <p>Designed and built a homepage for fictional Hill Brewing Co, a website for showcasing and managing homebrew recipes.</p>
            <p><span id="createdwith">Created with </span><span id="tools">&nbsp;Node.js, Express, MongoDB, React.js</span></p>
            <a target="_blank" href="https://www.hillbrewingco.net"><button class="hillbrewing-btn">LIVE VERSION</button></a>
            <a target="_blank" href="https://github.com/vickyungemach/hillbrewingco"><button class="hillbrewing-btn" id="github"> GITHUB</button></a>
        </div>
    )
}


export default Hillbrewingco;
