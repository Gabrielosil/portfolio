document.addEventListener('DOMContentLoaded', function() {
   
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    };
    
    const darkmode = document.querySelector('#darkmode');
    
    darkmode.onclick = () => {
        document.body.classList.toggle('active');
        darkmode.classList.toggle('bx-sun');
        
        if(document.body.classList.contains('active')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };
    
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('active');
        darkmode.classList.replace('bx-moon', 'bx-sun');
    }
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });
    
    new Typed('#typed-nome', {
        strings: ['Gabriel Oliveira'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});