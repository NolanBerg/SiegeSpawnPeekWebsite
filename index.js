document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle the dropdown content on button click
    dropdownButton.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('show');
        event.stopPropagation(); // Prevent event from bubbling up
    });

    // Close the dropdown if clicking outside of it
    window.addEventListener('click', function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});
