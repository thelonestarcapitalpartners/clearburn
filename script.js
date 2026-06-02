const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const quoteForm = document.getElementById('quoteForm');
const successMessage = document.getElementById('successMessage');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

if (quoteForm) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    successMessage.hidden = false;
    quoteForm.reset();
  });
}

function changeGalleryImage(img) {
  const mainImage = document.getElementById('galleryMain');
  const thumbnails = document.querySelectorAll('.gallery-thumb');
  
  mainImage.style.opacity = '0';
  setTimeout(() => {
    mainImage.src = img.src;
    mainImage.alt = img.alt;
    mainImage.style.opacity = '1';
  }, 150);
  
  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  img.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const firstThumb = document.querySelector('.gallery-thumb');
  if (firstThumb) {
    firstThumb.classList.add('active');
  }
});
