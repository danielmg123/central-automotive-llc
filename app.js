// Smooth Scrolling with Offset for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = document.querySelector('.navbar').offsetHeight; // Get the height of the navbar
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close the navbar dropdown if it's open in mobile view
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse);
            bootstrapCollapse.hide();
        }
    });
});

// Add fade-in animation when sections scroll into view
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in');
    
    const options = {
        threshold: 0.1 // Trigger when 10% of the section is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the section is in view
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
