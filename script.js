// --- Mobile Menu Toggle ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between Bars and Times
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// --- Close Mobile Menu on Click ---
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// --- Appointment Form Validation & Submission ---
const appointmentForm = document.getElementById('appointmentForm');
const successMsg = document.getElementById('successMessage');

appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic Validation
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name.trim() === "" || phone.length < 10 || !email.includes('@')) {
        alert("Please fill in the form details correctly.");
        return;
    }

    // Simulate Success
    successMsg.classList.remove('hidden');
    appointmentForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        successMsg.classList.add('hidden');
    }, 5000);
});

// --- Scroll Animation Trigger (Simple Intersection Observer) ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Select elements to animate
document.querySelectorAll('.service-box, .doctor-card, .stat-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});