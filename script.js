/*--------Toggle icon navbar---------*/

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};
/*--------Scroll section active link---------*/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a'); 


window.onscroll = () => {
   
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;  
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the section is in view
        if (top >= offset && top < offset + height) {
            
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
           
            document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active');
        }
    });

    /*--------Sticky navbar---------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*--------Remove toggle icon and navbar on scroll---------*/
    if (menuIcon && navbar) {
        menuIcon.classList.remove('fa-xmark');  // Correct the class name
        navbar.classList.remove('active');
    }
};

/*--------scrool reveal---------*/
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.my-image,.service-container, .portfolio-box, .contact form', {  origin:'buttom'});
ScrollReveal().reveal('.home-content h1, .about-image', {  origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});

/*--------scrool reveal---------*/
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Designer','Youtuber'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});
