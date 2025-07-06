// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Theme Toggle
const themeIcon = document.querySelector('#theme-icon');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
}

themeIcon.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
const texts = ["Web Developer", "Bot Creator", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before typing next
    }
    
    setTimeout(type, typingSpeed);
}

// Initialize typing animation
setTimeout(type, 1000);

// Projects Slider
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

// Show/Hide Code for Projects
document.querySelectorAll('.show-code').forEach(button => {
    button.addEventListener('click', function() {
        const projectCard = this.closest('.project-card');
        const codeContainer = projectCard.querySelector('.code-container');
        
        if (codeContainer) {
            if (codeContainer.style.display === 'block') {
                codeContainer.style.display = 'none';
                this.textContent = 'View Code';
            } else {
                codeContainer.style.display = 'block';
                this.textContent = 'Hide Code';
                
                // Smooth scroll to show full code
                codeContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest'
                });
            }
        }
    });
});

// Copy Code Functionality
document.querySelectorAll('.copy-code').forEach(button => {
    button.addEventListener('click', function() {
        const code = this.previousElementSibling.textContent;
        navigator.clipboard.writeText(code);
        
        this.textContent = 'Copied!';
        setTimeout(() => {
            this.textContent = 'Copy Code';
        }, 2000);
    });
});

// Close navbar when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Close mobile menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Scroll Reveal Animation
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });