const scrollSpy = () => {
    const home = document.getElementById('home');
    let homePosition = home.getBoundingClientRect().y;

    const projects = document.getElementById('projects');
    let projectsPosition = projects.getBoundingClientRect().y;

    const resume = document.getElementById('resume');
    let resumePosition = resume.getBoundingClientRect();

    // const contact = document.getElementById('contact');
    // let contactPosition = contact.getBoundingClientRect().y;



    const main = document.getElementById('main');

    main.addEventListener('scroll', function (e) {

        // home
        if (e.target.scrollTop <= projectsPosition -1) {
            document.getElementById('home-nav').classList.add('active');
            document.getElementById('projects-nav').classList.remove('active');
            document.getElementById('resume-nav').classList.remove('active');

        // projects
        } else if (e.target.scrollTop < resumePosition.y + 400) {
            document.getElementById('home-nav').classList.remove('active');
            document.getElementById('projects-nav').classList.add('active');
            document.getElementById('resume-nav').classList.remove('active');

        // resume
        } else {
            document.getElementById('home-nav').classList.remove('active');
            document.getElementById('projects-nav').classList.remove('active');
            document.getElementById('resume-nav').classList.add('active');
        }

        console.log('scroll', e.target.scrollTop);
        console.log('projects', projectsPosition);

    });
}

export default scrollSpy;