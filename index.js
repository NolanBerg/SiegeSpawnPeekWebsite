document.addEventListener('DOMContentLoaded', function() {
    // Video Upload Functionality
    const uploadForm = document.getElementById('uploadForm');
    const videoInput = document.getElementById('videoInput');
    const uploadStatus = document.getElementById('uploadStatus');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const formData = new FormData();
        formData.append('video', videoInput.files[0]);

        fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        })
        
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                uploadStatus.textContent = 'Video uploaded successfully!';
            } else {
                uploadStatus.textContent = 'Failed to upload video.';
            }
        })
        .catch(err => {
            console.error('Error uploading video:', err);
            uploadStatus.textContent = 'An error occurred during upload.';
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
