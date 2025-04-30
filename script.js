// Basic bot detection mechanism
document.addEventListener('DOMContentLoaded', function() {
    // Check for basic browser features to detect bots
    const isBot = !('onscroll' in window) || !('ontouchstart' in window) || !navigator.userAgent.includes('Mozilla');
    
    if (isBot) {
        console.warn('Potential bot detected. Access may be restricted.');
        // Optionally, redirect or show a warning
        // window.location.href = '/bot-detected.html'; // Example redirect
    } else {
        // Track basic human-like interaction (e.g., mouse movement)
        let hasInteracted = false;
        document.addEventListener('mousemove', function() {
            if (!hasInteracted) {
                hasInteracted = true;
                console.log('Human interaction detected.');
            }
        });
    }
});

// Alerts users that the message is sent in contact us form
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

// Search functionality for Home page (Featured Articles)
document.addEventListener('DOMContentLoaded', function() {
    const pageHeader = document.querySelector('header h1');
    if (pageHeader && pageHeader.textContent.trim() === 'Badger News') {
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

// Search functionality for Tech News page
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

// Search functionality for Local News page
document.addEventListener('DOMContentLoaded', function() {
    const pageHeader = document.querySelector('header h1');
    if (pageHeader && pageHeader.textContent.trim() === 'Local News') {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.querySelector('.search-container button');
        const articleContainers = document.querySelectorAll('.col');

        if (searchInput && searchButton && articleContainers.length > 0) {
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.toLowerCase();

                articleContainers.forEach(container => {
                    const titleElement = container.querySelector('.card-title');
                    if (titleElement) {
                        const title = titleElement.textContent.toLowerCase();
                        if (title.includes(searchTerm) || searchTerm === '') {
                            container.style.display = 'block';
                        } else {
                            container.style.display = 'none';
                        }
                    }
                });
            });
        }
    }
});

// Search functionality for Sports News page
document.addEventListener('DOMContentLoaded', function() {
    const pageHeader = document.querySelector('header h1');
    if (pageHeader && pageHeader.textContent.trim() === 'Sports News') {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.querySelector('.search-container button');
        const articleContainers = document.querySelectorAll('.col');

        if (searchInput && searchButton && articleContainers.length > 0) {
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.toLowerCase();

                articleContainers.forEach(container => {
                    const titleElement = container.querySelector('.card-title');
                    if (titleElement) {
                        const title = titleElement.textContent.toLowerCase();
                        if (title.includes(searchTerm) || searchTerm === '') {
                            container.style.display = 'block';
                        } else {
                            container.style.display = 'none';
                        }
                    }
                });
            });
        }
    }
});

// Search functionality for politics page
document.addEventListener('DOMContentLoaded', function() {
    const pageHeader = document.querySelector('header h1');
    if (pageHeader && pageHeader.textContent.trim() === 'Political News') {
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
