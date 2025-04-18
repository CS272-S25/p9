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

// --- Article filtering for technology page ---
document.addEventListener('DOMContentLoaded', function() {
    const technologyPageHeader = document.querySelector('header h1');
    if (technologyPageHeader && technologyPageHeader.textContent.trim() === 'Tech News') {
        const searchInput = document.getElementById('searchInput');
        const articleItems = document.querySelectorAll('.article-item');

        if (searchInput && articleItems.length > 0) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();

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