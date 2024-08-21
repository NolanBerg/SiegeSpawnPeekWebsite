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

document.getElementById("aboutPageButton").addEventListener("click", function() {
    window.location.href = "/BannerLinks/about.html";
});

document.getElementById("contactPageButton").addEventListener("click", function() {
    window.location.href = "/BannerLinks/contact.html";
});