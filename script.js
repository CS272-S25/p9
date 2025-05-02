// Basic bot detection mechanism
document.addEventListener('DOMContentLoaded', function() {
    const isBot = !('onscroll' in window) || !('ontouchstart' in window) || !navigator.userAgent.includes('Mozilla');
    
    if (isBot) {
        console.warn('Potential bot detected. Access may be restricted.');
    } else {
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

// Search functionality for all pages based on header
document.addEventListener('DOMContentLoaded', function() {
    const pageHeader = document.querySelector('header h1');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-container button');
    let containerSelector = '.article-item';

    if (pageHeader) {
        const pageTitle = pageHeader.textContent.trim();
        if (pageTitle === 'Local News' || pageTitle === 'Sports News') {
            containerSelector = '.col';
        }
    }

    const articleItems = document.querySelectorAll(containerSelector);
    if (searchInput && searchButton && articleItems.length > 0) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase();
            articleItems.forEach(article => {
                const titleElement = article.querySelector('.card-title');
                if (titleElement) {
                    const title = titleElement.textContent.toLowerCase();
                    article.style.display = (title.includes(searchTerm) || searchTerm === '') ? 'block' : 'none';
                }
            });
        });
    }
});

// Save Article to Local Storage
function saveArticle(button) {
    const card = button.closest('.card');
    const title = card.querySelector('.card-title').innerText;
    const link = card.querySelector('.btn-primary').href;

    let saved = JSON.parse(localStorage.getItem('savedArticles')) || [];
    const alreadySaved = saved.some(article => article.title === title);
    if (alreadySaved) {
        alert("You already saved this article.");
        return;
    }

    saved.push({ title, link });
    localStorage.setItem('savedArticles', JSON.stringify(saved));
    alert("Article saved!");
    renderSavedArticles();  // Re-render saved articles immediately after saving
}

// Utility function to render saved articles
function renderSavedArticles() {
    const savedContainer = document.getElementById('saved-articles-container');
    savedContainer.innerHTML = ''; // Clear the container first
    const saved = JSON.parse(localStorage.getItem('savedArticles') || '[]');

    if (saved.length === 0) {
        savedContainer.innerHTML = '<p>No saved articles yet.</p>';
    } else {
        saved.forEach((article, index) => {
            const card = document.createElement('div');
            card.className = 'col';
            card.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <a href="${article.link}" class="btn btn-secondary" target="_blank">Read Again</a>
                        <button class="btn btn-danger btn-sm" data-index="${index}" onclick="removeArticle(${index})">Remove</button>
                    </div>
                </div>
            `;
            savedContainer.appendChild(card);
        });
    }
}

// Remove article from saved list
function removeArticle(index) {
    const saved = JSON.parse(localStorage.getItem('savedArticles') || '[]');
    saved.splice(index, 1); // Remove the article at the given index
    localStorage.setItem('savedArticles', JSON.stringify(saved)); // Update the saved articles in localStorage

    renderSavedArticles(); // Re-render the saved articles to reflect the removal
}

// Initial rendering of saved articles on page load
document.addEventListener('DOMContentLoaded', function () {
    const pageHeader = document.querySelector('header h1');
    if (pageHeader && pageHeader.textContent.trim() === 'Badger News') {
        renderSavedArticles(); // Display saved articles when the page loads
    }
});
