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
});
