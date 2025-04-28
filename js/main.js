document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Hero Section Slider
    const heroSections = document.querySelectorAll('.hero, .about-hero, .contact-hero, .blog-hero');
    
    heroSections.forEach(hero => {
        const images = [
            '../images/hero1.jpg',
            '../images/hero2.jpg',
            '../images/hero3.jpg',
            '../images/hero4.jpg'
        ];
        
        let currentImageIndex = 0;
        
        // Create navigation dots
        const heroNav = document.createElement('div');
        heroNav.className = 'hero-nav';
        
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `hero-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                currentImageIndex = index;
                updateHeroImage();
                updateDots();
            });
            heroNav.appendChild(dot);
        });
        
        hero.appendChild(heroNav);
        
        const updateHeroImage = () => {
            const overlay = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
            hero.style.backgroundImage = `${overlay}, url(${images[currentImageIndex]})`;
        };
        
        const updateDots = () => {
            const dots = heroNav.querySelectorAll('.hero-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentImageIndex);
            });
        };
        
        // Auto slide every 5 seconds
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateHeroImage();
            updateDots();
        }, 5000);
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current navigation link
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
}); 