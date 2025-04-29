// alerts users that the message is sent in contact us form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = document.getElementById('form-message');
        if (message) {
            message.classList.remove('hidden');
            this.reset();
            setTimeout(() => message.classList.add('hidden'), 3000);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const pageHeader = document.querySelector('header h1');
    if (pageHeader && pageHeader.textContent.trim() === 'Tech News') {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.querySelector('.search-container button');
        const articleItems = document.querySelectorAll('.article-item');

        if (searchInput && searchButton && articleItems.length > 0) {
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.toLowerCase();

                articleItems.forEach(article => {
                    const titleElement = article.querySelector('.card-title');
                    if (titleElement) {
                        const title = titleElement.textContent.toLowerCase();
                        if (title.includes(searchTerm) || searchTerm === '') {
                            article.style.display = 'block';
                        } else {
                            article.style.display = 'none';
                        }
                    }
                });
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const pageHeader = document.querySelector('header h1');
    if (pageHeader && pageHeader.textContent.trim() === 'Local News') {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.querySelector('.search-container button');
        const articleContainers = document.querySelectorAll('.col'); // Changed to .col

        if (searchInput && searchButton && articleContainers.length > 0) {
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.toLowerCase();

                articleContainers.forEach(container => { // Changed variable name
                    const titleElement = container.querySelector('.card-title');
                    if (titleElement) {
                        const title = titleElement.textContent.toLowerCase();
                        if (title.includes(searchTerm) || searchTerm === '') {
                            container.style.display = 'block'; // Changed variable name
                        } else {
                            container.style.display = 'none'; // Changed variable name
                        }
                    }
                });
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const pageHeader = document.querySelector('header h1');
    if (pageHeader && pageHeader.textContent.trim() === 'Sports News') {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.querySelector('.search-container button');
        const articleContainers = document.querySelectorAll('.col'); // Changed to .col

        if (searchInput && searchButton && articleContainers.length > 0) {
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.toLowerCase();

                articleContainers.forEach(container => { // Changed variable name
                    const titleElement = container.querySelector('.card-title');
                    if (titleElement) {
                        const title = titleElement.textContent.toLowerCase();
                        if (title.includes(searchTerm) || searchTerm === '') {
                            container.style.display = 'block'; // Changed variable name
                        } else {
                            container.style.display = 'none'; // Changed variable name
                        }
                    }
                });
            });
        }
    }
});