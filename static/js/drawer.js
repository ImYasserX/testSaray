document.addEventListener('DOMContentLoaded', function() {
    // Select all 'More' buttons and corresponding extra items
    const moreButtons = document.querySelectorAll('.more-btn');
    let touchStartY = 0;
    let touchEndY = 0;

    moreButtons.forEach(function(button) {
        const extraItems = button.parentElement.nextElementSibling;
        if (!extraItems) return; // Ensure extra items exist

        // Toggle extra items on 'More' button click
        button.addEventListener('click', function() {
            extraItems.classList.toggle('show');
        });

        // Touch events for swiping
        extraItems.addEventListener('touchstart', function(e) {
            touchStartY = e.changedTouches[0].screenY;
        });

        extraItems.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].screenY;
            if (touchStartY - touchEndY > 100) { // Swipe up
                extraItems.classList.add('show');
            } else if (touchEndY - touchStartY > 100) { // Swipe down
                extraItems.classList.remove('show');
            }
        });

        // Close drawer when clicking outside
        document.addEventListener('click', function(e) {
            if (!extraItems.contains(e.target) && !button.contains(e.target)) {
                extraItems.classList.remove('show');
            }
        });
    });
});
