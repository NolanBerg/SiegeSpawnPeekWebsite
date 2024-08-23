document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Function to toggle dropdown
    function toggleDropdown() {
        dropdownContent.classList.toggle('show');
    }

    // Handle the dropdown for all screen sizes
    dropdownButton.addEventListener('click', function(event) {
        toggleDropdown();
        event.stopPropagation(); // Prevent event from bubbling up
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
