// Add hover effect to album cards
document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add hover effect to movie cards
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add hover animation to buttons
document.querySelectorAll('.spotify-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Add dynamic card hover effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const button = card.querySelector('.spotify-button');
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
    });
    card.addEventListener('mouseleave', () => {
        const button = card.querySelector('.spotify-button');
        button.style.opacity = '0';
        button.style.transform = 'translateY(10px)';
    });
});

