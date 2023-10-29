
  // Function to scroll to a section smoothly
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Add click event listeners to your navigation links
  document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('home');
  });
  
  document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('about');
  });
  

