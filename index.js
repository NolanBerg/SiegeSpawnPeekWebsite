document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.mapUI');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hover');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('hover');
        });
    });
});

document.getElementById("bankPageButton").addEventListener("click", function() {
    window.location.href = "Maps/Bank/bank.html"; // Go to bank page
});

document.getElementById("borderPageButton").addEventListener("click", function() {
    window.location.href = "Maps/Border/border.html"; // Go to border page
});

document.getElementById("chaletPageButton").addEventListener("click", function() {
    window.location.href = "Maps/Chalet/chalet.html"; // Go to chalet page
});

document.getElementById("clubhousePageButton").addEventListener("click", function() {
    window.location.href = "Maps/Clubhouse/clubhouse.html"; // Go to clubhouse page
});

document.getElementById("coastlinePageButton").addEventListener("click", function() {
    window.location.href = "Maps/Coastline/coastline.html"; // Go to coastline page
});

document.getElementById("consulatePageButton").addEventListener("click", function() {
    window.location.href = "Maps/Consulate/consulate.html"; // Go to consulate page
});

document.getElementById("emeraldplainsPageButton").addEventListener("click", function() {
    window.location.href = "Maps/EmeraldPlains/emeraldplains.html"; // Go to emerald plains page
});

document.getElementById("kafedostoyevskyPageButton").addEventListener("click", function() {
    window.location.href = "Maps/KafeDostoyevsky/kafedostoyevsky.html"; // Go to kafe dostoyevsky page
});

document.getElementById("kanalPageButton").addEventListener("click", function() {
    window.location.href = "Maps/Kanal/kanal.html"; // Go to kanal page
});

document.getElementById("lairPageButton").addEventListener("click", function() {
    window.location.href = "Maps/Lair/lair.html"; // Go to lair page
});

document.getElementById("nighthavenlabsPageButton").addEventListener("click", function() {
    window.location.href = "Maps/NighthavenLabs/nighthavenlabs.html"; // Go to nighthaven labs page
});

document.getElementById("oregonPageButton").addEventListener("click", function() {
    window.location.href = "Maps/Oregon/oregon.html"; // Go to oregon page
});

document.getElementById("outbackPageButton").addEventListener("click", function() {
    window.location.href = "Maps/Outback/outback.html"; // Go to outback page
});

document.getElementById("skyscraperPageButton").addEventListener("click", function() {
    window.location.href = "Maps/Skyscraper/skyscraper.html"; // Go to skyscraper page
});

document.getElementById("themeparkPageButton").addEventListener("click", function() {
    window.location.href = "Maps/ThemePark/themepark.html"; // Go to theme park page
});

document.getElementById("villaPageButton").addEventListener("click", function() {
    window.location.href = "Maps/Villa/villa.html"; // Go to villa page
});

document.getElementById("aboutPageButton").addEventListener("click", function() {
    window.location.href = "/BannerLinks/about.html";
});