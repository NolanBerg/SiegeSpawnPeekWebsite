document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle the dropdown content on button click (for smaller screens)
    dropdownButton.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {  // Only apply for smaller screens
            dropdownContent.classList.toggle('show');
            event.stopPropagation(); // Prevent event from bubbling up
        }
    });

    // Close the dropdown if clicking outside of it
    window.addEventListener('click', function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    // Prevent dropdown from closing when clicking inside
    dropdownContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
