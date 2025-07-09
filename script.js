const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("toggle-music");
const volumeSlider = document.getElementById("volume-slider");

// Toggle music play/pause
toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔊";
  } else {
    music.pause();
    toggleBtn.textContent = "🔈";
  }
});

// Adjust volume
volumeSlider.addEventListener("input", () => {
  music.volume = volumeSlider.value;
});

// Lightbox functionality
let currentIndex = 0;
let galleryImages = [];

document.addEventListener("DOMContentLoaded", () => {
  galleryImages = Array.from(document.querySelectorAll(".gallery-item img"));
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });
});

function openLightbox(index) {
  currentIndex = index;
  const img = galleryImages[index];
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const title = document.getElementById("info-title");
  const description = document.getElementById("info-description");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  title.textContent = img.dataset.title || "";
  description.textContent = img.dataset.description || "";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  openLightbox(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  openLightbox(currentIndex);
}
