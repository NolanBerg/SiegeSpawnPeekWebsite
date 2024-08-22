document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Function to toggle dropdown
    function toggleDropdown() {
        dropdownContent.classList.toggle('show');
    }

    // Add click event listener for mobile screens
    dropdownButton.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {  // Check if the screen width is 768px or less
            toggleDropdown();
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

    // Add hover functionality for larger screens
    if (window.innerWidth > 768) {
        dropdownButton.addEventListener('mouseenter', function() {
            dropdownContent.classList.add('show');
        });

        dropdownButton.addEventListener('mouseleave', function() {
            dropdownContent.classList.remove('show');
        });
    }
});
