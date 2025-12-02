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
});
