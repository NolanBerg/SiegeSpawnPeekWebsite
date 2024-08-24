document.addEventListener('DOMContentLoaded', function() {
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

    function populateSuggestions(searchText) {
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions

        const filteredMaps = Object.keys(mapUrls).filter(mapName => 
            mapName.toLowerCase().includes(searchText)
        );

        filteredMaps.forEach(mapName => {
            const suggestion = document.createElement('div');
            suggestion.className = 'autocomplete-suggestion';
            suggestion.textContent = mapName;
            suggestion.addEventListener('click', () => {
                window.location.href = mapUrls[mapName];
            });
            suggestionsContainer.appendChild(suggestion);
        });

        suggestionsContainer.style.display = filteredMaps.length > 0 ? 'block' : 'none';
    }

    // Hide suggestions when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});
