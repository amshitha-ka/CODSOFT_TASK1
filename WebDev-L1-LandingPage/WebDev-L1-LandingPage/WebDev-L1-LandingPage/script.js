// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusText = document.getElementById('formStatus');

    if (name && email && message) {
        statusText.style.color = '#16a34a';
        statusText.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
        document.getElementById('contactForm').reset();
    } else {
        statusText.style.color = '#dc2626';
        statusText.textContent = 'Please fill out all required fields.';
    }
});
