// Toggle Live Financial Highlights Section
document.getElementById('toggleHighlightsBtn').addEventListener('click', function () {
    const card = document.getElementById('highlightsCard');
    if (card.style.display === 'block') {
        card.style.display = 'none';
    } else {
        card.style.display = 'block';
        
        // Dynamic Counter Animations
        animateValue("statGrants", 0, 68.75, 1000, "₹ ", " Lakhs");
        animateValue("statTrained", 0, 80, 1000, "", " Technicians");
        animateValue("statProjects", 0, 4, 1000, "", " Active Projects");
    }
});

// Counter Helper Function
function animateValue(id, start, end, duration, prefix = "", suffix = "") {
    let obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = prefix + (progress * (end - start) + start).toFixed(progress === 1 && end % 1 !== 0 ? 2 : 0) + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Category Filter Function
function filterCards(category, event) {
    let items = document.querySelectorAll('.filter-item');
    let buttons = document.querySelectorAll('.tab-btn');

    // Update active tab UI
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event) {
        event.target.classList.add('active');
    }

    // Filter elements based on selection
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}