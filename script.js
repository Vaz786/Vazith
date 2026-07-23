// Filter Cards Functionality
function filterCards(category, event) {
    const items = document.querySelectorAll('.filter-item');
    const buttons = document.querySelectorAll('.tab-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    if (event) {
        event.target.classList.add('active');
    }

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Live Financial Highlights Toggle & Counter Animation
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleHighlightsBtn");
    const highlightsCard = document.getElementById("highlightsCard");
    let animated = false;

    toggleBtn.addEventListener("click", () => {
        if (highlightsCard.style.display === "block") {
            highlightsCard.style.display = "none";
        } else {
            highlightsCard.style.display = "block";
            if (!animated) {
                animateCounter("statGrants", 68.75, "₹ ", " Lakhs");
                animateCounter("statTrained", 120, "", " Persons");
                animateCounter("statProjects", 6, "", " Projects");
                animated = true;
            }
        }
    });
});

function animateCounter(id, target, prefix = "", suffix = "") {
    let current = 0;
    const element = document.getElementById(id);
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.innerText = `${prefix}${target}${suffix}`;
            clearInterval(timer);
        } else {
            element.innerText = `${prefix}${current.toFixed(1)}${suffix}`;
        }
    }, 40);
}