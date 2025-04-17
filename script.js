
// alerts users that the message is sent in contact us form 
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('form-message');
    message.classList.remove('hidden');
    this.reset();
    setTimeout(() => message.classList.add('hidden'), 3000);
});

// 
