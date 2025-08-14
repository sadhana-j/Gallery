const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: false,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxText = document.getElementById('lightbox-description');
let allImages = [];
let currentImageIndex = 0;

function openLightbox(img) {
    lightbox.classList.add("show");
    lightbox.style.display = 'flex';
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxText.innerText = img.dataset.desc || img.alt || 'No description available';
    currentImageIndex = Array.from(allImages).indexOf(img);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    const nextImg = allImages[currentImageIndex];
    lightboxImage.src = nextImg.src;
    lightboxImage.alt = nextImg.alt;
    lightboxText.innerText = nextImg.dataset.desc || nextImg.alt || 'No description available';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    const prevImg = allImages[currentImageIndex];
    lightboxImage.src = prevImg.src;
    lightboxImage.alt = prevImg.alt;
    lightboxText.innerText = prevImg.dataset.desc || prevImg.alt || 'No description available';
}

function closeLightbox() {
    lightbox.classList.remove("show");
    lightbox.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    allImages = document.querySelectorAll(".swiper-slide img, .gallery img");
    if (allImages.length === 0) {
        console.error("No images found for lightbox. Ensure '.swiper-slide img' and '.gallery img' elements exist in the DOM.");
        return;
    }
    allImages.forEach((img) => {
        img.addEventListener("click", function () {
            openLightbox(this);
        });
    });

    
  
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('show')) {
        closeLightbox();
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});
document.addEventListener('click', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});
