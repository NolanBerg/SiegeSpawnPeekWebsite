document.addEventListener('DOMContentLoaded', function() {
    // Video Upload Functionality
    const uploadForm = document.getElementById('uploadForm');
    const videoInput = document.getElementById('videoInput');
    const mapSelect = document.getElementById('mapSelect'); // Get the map select element
    const uploadStatus = document.getElementById('uploadStatus');

    // Function to display and auto-hide the upload status message
    function showUploadStatus(message, duration = 5000) {
        uploadStatus.textContent = message;

        // Clear any existing timeout
        if (uploadStatus.timeoutId) {
            clearTimeout(uploadStatus.timeoutId);
        }

        // Hide the message after the specified duration
        uploadStatus.timeoutId = setTimeout(function() {
            uploadStatus.textContent = '';
            uploadStatus.timeoutId = null; // Clear the timeoutId
        }, duration);
    }

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        if (!mapSelect.value) {
            showUploadStatus('Please select a map.');
            return;
        }

        const formData = new FormData();
        formData.append('video', videoInput.files[0]);
        formData.append('map', mapSelect.value); // Append the selected map

        fetch('/upload', { // Use relative path to match server's route
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showUploadStatus('Video uploaded successfully!');
                // Clear the form
                uploadForm.reset();
            } else {
                showUploadStatus('Failed to upload video.');
            }
        })
        .catch(err => {
            console.error('Error uploading video:', err);
            showUploadStatus('An error occurred during upload.');
        });
    });

    // Search Bar and Autocomplete Functionality
    const searchBar = document.querySelector('.search-bar');
    const suggestionsContainer = document.querySelector('.autocomplete-suggestions');

    // Map names to URLs
    const mapUrls = {
        "Bank": "/Maps/Bank/bank.html",
        "Border": "/Maps/Border/border.html",
        "Chalet": "/Maps/Chalet/chalet.html",
        "Clubhouse": "/Maps/Clubhouse/clubhouse.html",
        "Coastline": "/Maps/Coastline/coastline.html",
        "Consulate": "/Maps/Consulate/consulate.html",
        "Emerald Plains": "/Maps/EmeraldPlains/emeraldplains.html",
        "Kafe Dostoyevsky": "/Maps/KafeDostoyevsky/kafedostoyevsky.html",
        "Kanal": "/Maps/Kanal/kanal.html",
        "Lair": "/Maps/Lair/lair.html",
        "Nighthaven Labs": "/Maps/NighthavenLabs/nighthavenlabs.html",
        "Oregon": "/Maps/Oregon/oregon.html",
        "Outback": "/Maps/Outback/outback.html",
        "Skyscraper": "/Maps/Skyscraper/skyscraper.html",
        "Theme Park": "/Maps/ThemePark/themepark.html",
        "Villa": "/Maps/Villa/villa.html"
    };

    // Show suggestions when the search bar is focused or clicked
    searchBar.addEventListener('focus', function() {
        populateSuggestions("");
    });

    // Filter suggestions based on search input
    searchBar.addEventListener('input', function() {
        const searchText = searchBar.value.trim().toLowerCase();
        populateSuggestions(searchText);
    });

    // Populate the autocomplete suggestions
    function populateSuggestions(searchText) {
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions

        // Filter maps based on the search text
        const filteredMaps = Object.keys(mapUrls).filter(mapName => 
            mapName.toLowerCase().includes(searchText)
        );

        // Display suggestions
        filteredMaps.forEach(mapName => {
            const suggestion = document.createElement('div');
            suggestion.className = 'autocomplete-suggestion';
            suggestion.textContent = mapName;
            suggestion.addEventListener('click', () => {
                window.location.href = mapUrls[mapName]; // Redirect to the map's URL
            });
            suggestionsContainer.appendChild(suggestion);
        });

        // Show or hide the suggestions container
        suggestionsContainer.style.display = filteredMaps.length > 0 ? 'block' : 'none';
    }

    // Hide suggestions when clicking outside the search bar or suggestions
    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});