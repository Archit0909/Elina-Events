document.addEventListener('DOMContentLoaded', function() {
    // --- Smooth Scroll for Internal Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Active Navigation Link Highlighting ---
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- Example: Dynamically setting an image URL using JavaScript ---
    // You wouldn't typically do this for static images in a simple site,
    // but this demonstrates how JS can manipulate image sources.
    const aboutImageElement = document.getElementById('about-img'); // Get the image element by its ID
    if (aboutImageElement) {
        // Set the image source dynamically
        aboutImageElement.src = 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        aboutImageElement.alt = 'A team collaborating on event planning (set by JS)';
    }

    // --- Optional: Form Submission for Contact Page (using a service) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // For a real contact form, you need a backend or a service like Formspree
            alert('Contact form submitted! (Note: In a real website, this would send an email via a backend service.)');
            contactForm.reset();
        });
    }
});