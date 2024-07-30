document.addEventListener("DOMContentLoaded", function() {
    // Get the modal elements and their components
    var myModal = document.getElementById("myModal");
    var myModalImage = document.getElementById("myModalImage");
    var drawerModal = document.getElementById("drawerModal");
    var drawerModalImage = document.getElementById("drawerModalImage");
    var closeButtons = document.querySelectorAll(".close");

    // Open the drawer modal with the clicked image
    document.querySelectorAll(".bottom-drawer .image-wrapper img").forEach(function(img) {
        img.onclick = function() {
            drawerModal.style.display = "flex";
            drawerModalImage.src = this.src;
            drawerModalImage.alt = this.alt;
            drawerModal.classList.add("zoom-in");
        };
    });

    // Open the existing modal with the clicked image
    document.querySelectorAll(".item-card img").forEach(function(img) {
        img.onclick = function() {
            myModal.style.display = "flex";
            myModalImage.src = this.src;
            myModalImage.alt = this.alt;
            myModal.classList.add("zoom-in");
        };
    });

    // Event listener for closing the modals
    closeButtons.forEach(function(button) {
        button.onclick = function() {
            var modalId = this.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            modal.style.display = "none";
            modal.classList.remove("zoom-in");
        };
    });

    // Ensure that closing the modal does not affect the drawer
    window.onclick = function(event) {
        // Close main modal when clicking outside the modal content
        if (event.target === myModal) {
            myModal.style.display = "none";
            myModal.classList.remove("zoom-in");
        }
        // Close drawer modal only when clicking outside the drawer content
        else if (event.target === drawerModal && !event.target.closest(".modal-content")) {
            drawerModal.style.display = "none";
            drawerModal.classList.remove("zoom-in");
        }
    };

    // Prevent drawer from closing when clicking inside the drawer content
    drawerModal.querySelector('.modal-content').onclick = function(event) {
        event.stopPropagation();
    };
});
