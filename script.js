// Basic bot detection mechanism
document.addEventListener('DOMContentLoaded', function () {
    const isBot = !('onscroll' in window) || !('ontouchstart' in window) || !navigator.userAgent.includes('Mozilla');
    if (isBot) {
        console.warn('Potential bot detected. Access may be restricted.');
    } else {
        let hasInteracted = false;
        document.addEventListener('mousemove', function () {
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
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const message = document.getElementById('form-message');
        if (message) {
            message.classList.remove('hidden');
            this.reset();
            setTimeout(() => message.classList.add('hidden'), 3000);
        }
    });
}

// Search functionality
document.addEventListener('DOMContentLoaded', function () {
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
        searchButton.addEventListener('click', function () {
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

// Save article to local storage
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
    renderSavedArticles(); // Refresh list without reloading
}

// Render saved articles
function renderSavedArticles() {
    const savedContainer = document.getElementById('saved-articles-container');
    if (!savedContainer) return; // Prevent error on pages without the container
    savedContainer.innerHTML = '';

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
                        <button class="btn btn-danger btn-sm" onclick="removeArticle(${index})">Remove</button>
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
    saved.splice(index, 1);
    localStorage.setItem('savedArticles', JSON.stringify(saved));
    renderSavedArticles();
}

// Render on homepage load
document.addEventListener('DOMContentLoaded', function () {
    const pageHeader = document.querySelector('header h1');
    if (pageHeader && pageHeader.textContent.trim() === 'Badger News') {
        renderSavedArticles();
    }
});

async function fetchRecentNews() {
    const apiKey = 'zkKIZHx34tAZpXmBhLccvy5OPtzdfALN'; 
    const query = 'U.S.'; 
    const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;
    const nytNewsContainer = document.querySelector('#nyt-articles-container'); 

    if (!nytNewsContainer) {
        console.error('NYT news container element with ID "nyt-articles-container" not found.');
        return;
    }

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const articles = data.response.docs;

        nytNewsContainer.innerHTML = ''; 

        if (articles && articles.length > 0) {
            articles.forEach(article => {
                const headline = article.headline.main;
                const articleUrl = article.web_url;

                const articleDiv = document.createElement('div');
                articleDiv.className = 'col article-item'; 

                articleDiv.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${headline}</h5>
                            <p class="card-text"><a href="${articleUrl}" target="_blank">Read More</a></p>
                        </div>
                    </div>
                `;
                nytNewsContainer.appendChild(articleDiv);
            });
        } else {
            nytNewsContainer.innerHTML = '<p>No recent news articles found from NYT for Wisconsin.</p>';
        }

    } catch (error) {
        console.error('Error fetching news from NYT API:', error);
        nytNewsContainer.innerHTML = '<p>Failed to load recent news from NYT.</p>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('saved-articles-container')) {
        renderSavedArticles();
    }
});
