// Toggle Card Details (Inline Accordion Expand)
function toggleCard(cardElement) {
    const isActive = cardElement.classList.contains('active');
    
    // Optional: Close other cards when opening a new one
    document.querySelectorAll('.expandable-card').forEach(card => {
        card.classList.remove('active');
        const clickMoreText = card.querySelector('.click-more');
        if (clickMoreText) {
            clickMoreText.innerHTML = '<i class="fa-solid fa-chevron-down toggle-icon"></i> Click to read details';
        }
    });

    // Toggle selected card
    if (!isActive) {
        cardElement.classList.add('active');
        const clickMoreText = cardElement.querySelector('.click-more');
        if (clickMoreText) {
            clickMoreText.innerHTML = '<i class="fa-solid fa-chevron-up toggle-icon"></i> Click to hide details';
        }
    }
}

// Toggle Live Highlights Section with Animated Counter
document.getElementById('toggleHighlightsBtn').addEventListener('click', function () {
    const card = document.getElementById('highlightsCard');
    
    if (card.style.display === 'block') {
        card.style.display = 'none';
    } else {
        card.style.display = 'block';
        animateCounter('statGrants', 0, 68.75, 1200, '₹ ', ' Lakhs');
        animateCounter('statTrained', 0, 140, 1000, '', ' Artisans');
        animateCounter('statProjects', 0, 6, 800, '', ' Sanctioned');
    }
});

// Counter Animation Function
function animateCounter(id, start, end, duration, prefix = '', suffix = '') {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = (progress * (end - start) + start).toFixed(progress === 1 && end % 1 !== 0 ? 2 : 0);
        obj.innerHTML = `${prefix}${value}${suffix}`;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Category Filter Functionality
function filterCards(category, event) {
    const cards = document.querySelectorAll('.filter-item');
    const buttons = document.querySelectorAll('.tab-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    if (event) event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}