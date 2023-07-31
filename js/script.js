// Typed Effect
const typed = new Typed(".multiple-text-type", {
    strings: ["โรงเรียนสันกำแพง"],
    typeSpeed: 130,
    backSpeed: 90,
    backDelay: 1000,
    loop: false
  });

/*=============== toggle icon navbar ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=============== scroll sections active Link ===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });
    /*=============== sticky navbar ===============*/
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=============== remove toggle icon and navbar when click navbar Link (scroll) ===============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*=============== scroll reveal ===============*/
ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 1500,
    delay: 300
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'bottom' });
ScrollReveal().reveal('.home-img, .skills-box, .btn, .social-media a, .about-img, .contact form p, .portfolio-box, .contact form, .contact-info-box a', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.about-content h2', { interval: 200, origin: 'top' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });

/*=============== ParticlesJS ===============*/
particlesJS.load("particles-js", "js/particles-js/particles.json");