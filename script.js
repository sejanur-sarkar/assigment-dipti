// Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

      document.addEventListener('DOMContentLoaded', function() {
            // Get all navbar links
            const navLinks = document.querySelectorAll('.nav-link');
            
            // Get the navbar collapse element
            const navbarCollapse = document.getElementById('navbarNav');
            
            // Add click event to each nav link
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    // Check if navbar is collapsed (mobile view)
                    if (navbarCollapse.classList.contains('show')) {
                        // Create a collapse instance and hide it
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                            toggle: false
                        });
                        bsCollapse.hide();
                    }
                });
            });
        });

// Simple scroll-triggered animation with data attributes
document.addEventListener('DOMContentLoaded', function() {
    let animated = false;

    function animateSkills() {
        if (animated) return;
        
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const percentageSpan = item.querySelector('span');
            const progressBar = item.querySelector('.progress-bar');
            const target = parseInt(percentageSpan.getAttribute('data-target'));
            
            if (target && progressBar) {
                let count = 0;
                const duration = 2000;
                const intervalTime = duration / target;
                
                const timer = setInterval(() => {
                    if (count >= target) {
                        clearInterval(timer);
                    } else {
                        count++;
                        progressBar.style.width = count + '%';
                        percentageSpan.textContent = count + '%';
                    }
                }, intervalTime);
            }
        });
        
        animated = true;
    }

    // Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateSkills();
            }
        });
    }, { threshold: 0.5 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});