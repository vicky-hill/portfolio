import React from 'react';
import html from '../../images/Logos/html.png';
import css from '../../images/Logos/css.png';
import javascript from '../../images/Logos/javascript.png';
import node from '../../images/Logos/node.png';
import react from '../../images/Logos/react.png';
import mongo from '../../images/Logos/mongodb.png';


const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-greeting">
                <h1 className="greeting">Hi, I'm Vicky!</h1>
                <h2 className="subtitle">a full stack developer specializing in:</h2>
            </div>

            <div className="landing-languages">
                <a href="" class="language html"> <img src={html} alt="" class="language-logo" /> HTML</a>
                <a href="" class="language css"> <img src={css} alt="" class="language-logo" /> CSS</a>
                <a href="" class="language js"> <img src={javascript} alt="" class="language-logo" /> JavaScript</a>
            </div>

            <div className="landing-languages shift">
                <a href="" class="language node"> <img src={node} alt="" class="language-logo" /> Node.js</a>
                <a href="" class="language react"> <img src={react} alt="" class="language-logo" /> React.js</a>
                <a href="" class="language mongo"> <img src={mongo} alt="" class="language-logo" /> MongoDB</a>
            </div>
        </div>
    )
}



export default Landing