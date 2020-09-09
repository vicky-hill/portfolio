import React from 'react';
import lo70s from '../../../images/Projects/lo70s.png';

const Lo70s = () => {
    return (
        <div className="col project">
           <a target="_blank" href="https://www.lo70s.com"><img class="screenshot" src={lo70s} alt="" /></a>
            <h3>Lo70s Homepage</h3>
            <p>Responsible for the design, development, and maintenance of the Lo70s homepage. The website was built with
        Wordpress and the Divi Theme.</p>
            <p><span id="createdwith">Created with </span><span id="tools">&nbsp;Wordpress</span></p>
            <a target="_blank" href="https://www.lo70s.com"><button id="lo70s">LIVE VERSION</button></a>
        </div>
    )
}


export default Lo70s;
