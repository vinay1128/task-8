// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter subscription
document.querySelector('button[type="button"]').addEventListener('click', function() {
    const email = document.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for subscribing! You will receive our latest updates.');
        document.querySelector('input[type="email"]').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Load more posts functionality
document.querySelector('.btn-outline-primary').addEventListener('click', function() {
    this.innerHTML = '<i class="bi bi-arrow-clockwise me-2"></i>Loading...';
    setTimeout(() => {
        this.innerHTML = '<i class="bi bi-check-circle me-2"></i>All posts loaded!';
        this.disabled = true;
    }, 1500);
});