
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Function to scroll to section
    function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    }
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.fill');
    
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
          bar.style.width = bar.style.width;
        }
      });
    };
    
    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('load', animateSkillBars);