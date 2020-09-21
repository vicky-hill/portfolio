import React from 'react';
import csudhlandingpage from '../../../images/Projects/csudhlandingpage.png';

const CSUDH = () => {
    return (
        <div className="col project centered">
           <a target="_blank" href="https://beachcoders.com/college/csudh/"><img class="screenshot" src={csudhlandingpage} alt="" /></a>
            <h3>BeachCoders/CSUDH Partnership Landing Page</h3>
            <p>Created a landing page with course offerings for BeachCoders&nbsp;Academy partnering with California State University Dominguez Hills.</p>
            <p><span id="createdwith">Created with </span><span id="tools">&nbsp;HTML, CSS, JavaScript, Materialize</span></p>
            <a target="_blank" href="https://beachcoders.com/college/csudh/"><button id="lo70s">LIVE VERSION</button></a>
        </div>
    )
}


export default CSUDH;
