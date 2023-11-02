
  // // Function to scroll to a section smoothly
  // function scrollToSection(sectionId) {
  //   const section = document.getElementById(sectionId);
  //   section.scrollIntoView({ behavior: 'smooth' });
  // }
  
  // // Add click event listeners to your navigation links
  // document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
  //   e.preventDefault();
  //   scrollToSection('home');
  // });
  
  // document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
  //   e.preventDefault();
  //   scrollToSection('about');
  // });
  


//   document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('nav a');

//     // Smooth scroll to section when a navigation link is clicked
//     navLinks.forEach(function (link) {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 // Scroll smoothly to the target section
//                 window.scrollTo({
//                     top: targetSection.offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });



// Function to handle smooth scrolling when a navigation link is clicked
document.querySelectorAll('ul.menu li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1); // Get the target section's id
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth' // Smooth scroll
          });
      }
  });
});
