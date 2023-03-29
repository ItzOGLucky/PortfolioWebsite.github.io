let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

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
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });



const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function Mail() {
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let subject = document.getElementById("Subject").value;
    let message = document.getElementById("Message").value;

    Email.send({
        SecureToken : "3c3a7908-f722-4509-bb72-e37860d01673",
        To : 'lakshyasahu20120@gmail.com',
        From : "lakshyasahu20120@gmail.com",
        Subject : "Mail From Portfolio Website",
        Body : "User Name: " + name + "<br/> User Email: " + email + "<br/> Contact No: " + contact + "<br/> Subject: " + subject + "<br/> User Message: " + message
    }).then(
      message => alert(message)
    );
}