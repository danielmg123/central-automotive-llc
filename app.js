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

// Adjust the carousel interval speed (in milliseconds) for the reviews section
var reviewsCarousel = document.querySelector('#reviewsCarousel');
if (reviewsCarousel) {
    var carousel = new bootstrap.Carousel(reviewsCarousel, {
        interval: 10000, // 10000 milliseconds = 10 seconds
        pause: 'hover',  // Optional: pauses the carousel when the user hovers over it
    });
}

// Close the banner when the close button is clicked
document.getElementById('closeBanner').addEventListener('click', function () {
    document.getElementById('spanish-banner').style.display = 'none';
});

// Scroll to contact section when the "Contáctenos" button is clicked
document.getElementById('contactButton').addEventListener('click', function () {
    document.getElementById('spanish-banner').style.display = 'none'; // Optionally hide the banner
    const contactSection = document.getElementById('contact');
    const offset = document.querySelector('.navbar').offsetHeight;
    const elementPosition = contactSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
});
