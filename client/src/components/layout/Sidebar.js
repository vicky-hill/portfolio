import React from 'react';


const Sidebar = () => {
    return (
        <div className="sidebar" id="sidebar">

            {/* Name Tag */}
            <h3 className="name-tag">Vicky</h3>
            <h3 className="name-tag">Ungemach</h3>

            {/* Nav */}
            <div className="nav" >






                    <a href="#home">
                    <div className="nav-item active" id="home-nav">
                        <i className="fas fa-home"></i><p>Home</p>
                    </div>
                </a>

                <a href="#projects">
                    <div className="nav-item" id="projects-nav">
                        <i className="fas fa-th-large"></i><p>Projects</p>
                    </div>
                </a>

                <a href="#resume">
                    <div className="nav-item" id="resume-nav">
                        <i className="fas fa-briefcase"></i><p>Resume</p>
                    </div>
                </a>

                <a href="#contact" >
                    <div className="nav-item" id="contact-nav">
                        <i className="fas fa-envelope"></i><p>Contact</p>
                    </div>
                </a>

              
            </div>


            {/* Logo Footer */}
            <div className="logo-footer">
                <a href="#contact"><i className="fas fa-phone"></i></a>
                <a href="https://www.linkedin.com/in/vicky-ungemach-630922126/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/vickyungemach?tab=repositories" target="_blank"><i className="fab fa-github"></i></a>
                <a href="#contact"><i className="fas fa-envelope"></i></a>
            </div>

        </div>
    )
}



export default Sidebar;
