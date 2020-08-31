import React from 'react';


const Sidebar = () => {
    return (
        <div className="sidebar">

            {/* Name Tag */}
            <h3 className="name-tag">Vicky</h3>
            <h3 className="name-tag">Ungemach</h3>

            {/* Nav */}
            <div className="nav">
                <a href="">
                    <div className="nav-item">
                        <i class="fas fa-home"></i><p>Home</p>
                    </div>
                </a>

                <a href="">
                    <div className="nav-item active">
                        <i class="fas fa-th-large"></i><p>Projects</p>
                    </div>
                </a>

                <a href="">
                    <div className="nav-item">
                        <i class="fas fa-briefcase"></i><p>Resume</p>
                    </div>
                </a>

                <a href="">
                    <div className="nav-item">
                        <i class="fas fa-envelope"></i><p>Contact</p>
                    </div>
                </a>
            </div>

            {/* Logo Footer */}
            <div className="logo-footer">
                <a href=""><i class="fas fa-phone"></i></a> 
                <a href="https://www.linkedin.com/in/vicky-ungemach-630922126/"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/vickyungemach?tab=repositories"><i class="fab fa-github"></i></a>
                <a href=""><i class="fas fa-envelope"></i></a>
            </div>

        </div>
    )
}



export default Sidebar;
