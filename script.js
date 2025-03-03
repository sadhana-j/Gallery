const swiper= new Swiper('.swiper', {
    loop: true,
    autoplay: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',},
});
//lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxText = document.getElementById('lightbox-description');
function openLightbox(img) {
lightbox.classList.add("show");
lightbox.style.display = 'flex';
lightboxImage.src = img.src;
lightboxText.innerText = img.alt;
}

function closeLightbox() {
lightbox.classList.remove("show");
lightbox.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function () {
    // Select all images inside .swiper-slide and .gallery
    const images = document.querySelectorAll(".swiper-slide img, .gallery img");

    images.forEach((img) => {
        img.addEventListener("click", function () {
            openLightbox(this);
        });
    });
});


// Close Lightbox on Outside Click
lightbox.addEventListener('click', (e) => {
if (e.target === lightbox) {
    closeLightbox();
}
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    const header = document.querySelector("header");
    const links = document.querySelectorAll("a"); // Fix link colors

    function applyTheme(theme) {
        if (theme === "light") {
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
            header.classList.add("light-mode");
            document.documentElement.style.setProperty("--text-color", "#121212");
            document.documentElement.style.setProperty("--bg-color", "#f5f5f5");
            document.documentElement.style.setProperty("--card-bg", "#ffffff");
            document.documentElement.style.setProperty("--border-color", "#ccc");
            document.documentElement.style.setProperty("--shadow", "0px 4px 10px rgba(0, 0, 0, 0.1)");

            toggleButton.textContent = "☀️"; // Light mode icon
            links.forEach(link => link.style.color = "#121212"); // Update links

        } else {
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
            header.classList.remove("light-mode");
            document.documentElement.style.setProperty("--text-color", "#ffffff");
            document.documentElement.style.setProperty("--bg-color", "#121212");
            document.documentElement.style.setProperty("--card-bg", "#1e1e1e");
            document.documentElement.style.setProperty("--border-color", "#333");
            document.documentElement.style.setProperty("--shadow", "0px 4px 15px rgba(255, 255, 255, 0.1)");

            toggleButton.textContent = "🌙"; // Dark mode icon
            links.forEach(link => link.style.color = "#ffffff"); // Update links
        }
        localStorage.setItem("theme", theme);
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    // Toggle theme
    toggleButton.addEventListener("click", function () {
        const newTheme = body.classList.contains("light-mode") ? "dark" : "light";
        applyTheme(newTheme);
    });
});

