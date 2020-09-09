import React from 'react';
import resume from '../../../images/resume.png';
import pdf from '../../../images/vicky-ungemach-resume.pdf';

const Resume = () => {
    return (
        <section className="scrollspy"  id="resume" >

            <div className="section">
                <h1 className="title">My Resume</h1>
                <a href={pdf} target="_blank" ><img id="resume-img" src={resume}></img></a>



            </div>
        </section>
    )
}

export default Resume;