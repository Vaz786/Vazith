document.addEventListener("DOMContentLoaded", () => {
    // 1. Toggle Live Highlights Card & Animate Counters
    const toggleBtn = document.getElementById("toggleHighlightsBtn");
    const highlightsCard = document.getElementById("highlightsCard");
    let hasAnimated = false;

    if (toggleBtn && highlightsCard) {
        toggleBtn.addEventListener("click", () => {
            highlightsCard.classList.toggle("active");

            if (highlightsCard.classList.contains("active") && !hasAnimated) {
                animateCounters();
                hasAnimated = true;
            }
        });
    }

    function animateCounters() {
        animateValue("statGrants", 0, 68.75, 1200, "₹ ", " Lakhs");
        animateValue("statTrained", 0, 120, 1200, "", "+");
        animateValue("statProjects", 0, 6, 1000, "", " Projects");
    }

    function animateValue(id, start, end, duration, prefix = "", suffix = "") {
        const obj = document.getElementById(id);
        if (!obj) return;
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = (progress * (end - start) + start).toFixed(end % 1 !== 0 ? 2 : 0);
            obj.innerHTML = `${prefix}${currentValue}${suffix}`;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
});

// 2. Expand/Collapse Details Card
function toggleCard(cardElement) {
    cardElement.classList.toggle("active");
}

// 3. Tab Filtering for Collaborative Programs
function filterCards(category, event) {
    const cards = document.querySelectorAll(".filter-item");
    const buttons = document.querySelectorAll(".tab-btn");

    buttons.forEach((btn) => btn.classList.remove("active"));
    if (event) {
        event.target.classList.add("active");
    }

    cards.forEach((card) => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}