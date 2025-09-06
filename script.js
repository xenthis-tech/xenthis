document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress');
    const percentage = document.getElementById('percentage');
    const message = document.getElementById('message');
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    const messages = [
        " ",
        "Turning...",
        "Ideas...",
        "Into...",
        "Impact..."
    ];
    
    let width = 0;
    let currentMessage = 0;
    
    // Update progress bar
    const interval = setInterval(() => {
        width += 1;
        progressBar.style.width = width + '%';
        percentage.textContent = width + '%';
        
        // Update message every 20% progress
        if (width % 20 === 0 && currentMessage < messages.length - 1) {
            currentMessage++;
            message.textContent = messages[currentMessage];
        }
        
        if (width >= 100) {
            clearInterval(interval);
            message.textContent = "Welcome!";
            message.classList.add('completed');
            percentage.classList.add('completed');
            
            // Ensure the progress bar is at 100% before hiding
            progressBar.style.width = '100%';
            
            // After completion, hide loading screen and show main content
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
                
                // Show main content
                mainContent.style.opacity = '1';
                
                // Initialize animations for main content
                animateOnScroll();
            }, 800);
        }
    }, 50); // 50ms * 100 = 5000ms (5s total)
});
        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const aboutSection = document.getElementById('about');
            const aboutSectionTop = aboutSection.offsetTop;
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Show navbar when scrolled to about section
            if (window.scrollY > aboutSectionTop - 100) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
            }
        });

        // Update active nav-link on scroll
        function updateActiveNav() {
            const sections = ['home', 'about', 'services', 'contact'];
            const scrollPos = window.scrollY + 100; // Offset for navbar height
            let currentSection = 'home';

            sections.forEach(section => {
                const el = document.getElementById(section);
                if (el && el.offsetTop <= scrollPos) {
                    currentSection = section;
                }
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
        
        // Auto close navbar when clicking a link
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.addEventListener('click', () => {
                const navbarToggler = document.querySelector('.navbar-toggler');
                if (!navbarToggler.classList.contains('collapsed')) {
                    navbarToggler.click();
                }
            });
        });

        // Smooth Scroll for Anchor Links
        document.querySelectorAll('.nav-link, .scroll-down a, .footer-links a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Back to Top Button
        const backToTop = document.querySelector('.back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        // Enhanced scroll animations
        function animateOnScroll() {
            document.querySelectorAll('.animate-on-scroll, .slide-in-left, .slide-in-right, .zoom-in, .fade-in-up, .fade-in-down, .scale-in, .flip-in').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    el.classList.add('animated');
                }
            });
        }
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Here you would typically send the form data to a server
                // For now, we'll just show an alert
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
        
        // NEW: Additional animation effects on scroll
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            if (!particlesContainer) return;
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 10 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 15;
                const duration = Math.random() * 10 + 15;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Initialize particles
        createParticles();