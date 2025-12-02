// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-btn');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  burgerBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  });

  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      burgerBtn.classList.remove('active');
      body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !burgerBtn.contains(e.target)) {
      navLinks.classList.remove('active');
      burgerBtn.classList.remove('active');
      body.style.overflow = '';
    }
  });

  // Scroll to top button functionality
  const scrollTopBtn = document.querySelector('.scroll-top-btn');
  const navbar = document.querySelector('.navbar');

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    const navbarHeight = navbar.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > navbarHeight) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top when clicked
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Scroll animation for sections
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all major sections
  const sections = document.querySelectorAll('.hero, .section, .video-container');
  sections.forEach(section => {
    section.classList.add('scroll-animate');
    observer.observe(section);
  });

  // Handle smooth scrolling for anchor links with proper offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Immediately show all sections up to and including target
        let reachedTarget = false;
        sections.forEach(section => {
          if (!reachedTarget) {
            section.classList.add('animate-in');
          }
          if (section.id === targetId || section.contains(targetElement)) {
            reachedTarget = true;
          }
        });
        
        // Calculate offset (small buffer only)
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 30;
        
        // Smooth scroll to position
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
