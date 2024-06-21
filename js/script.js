// share link button
document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.btn-share');

    shareButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const platform = button.getAttribute('data-platform');
            const judulArtikel = document.querySelector('h1').innerText.trim();
            const urlArtikel = window.location.href;

            let shareUrl = '';

            if (platform === 'facebook') {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlArtikel)}`;
            } else if (platform === 'twitter') {
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(judulArtikel)}&url=${encodeURIComponent(urlArtikel)}`;
            } else if (platform === 'whatsapp') {
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(judulArtikel + ' ' + urlArtikel)}`;
            } else if (platform === 'linkedin') {
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(urlArtikel)}&title=${encodeURIComponent(judulArtikel)}&summary=&source=`;
            }

            if (shareUrl !== '') {
                window.open(shareUrl, '_blank');
            }
        });
    });
});

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.container', { origin: 'top' });
ScrollReveal().reveal('a', { origin: 'top' });
ScrollReveal().reveal('h1, h2', { origin: 'left' });
ScrollReveal().reveal('p', { origin: 'right' });
