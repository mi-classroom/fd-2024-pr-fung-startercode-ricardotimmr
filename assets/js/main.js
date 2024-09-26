import { slideshow } from './modules/slideshow.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  slideshow();
});

document.querySelectorAll('.section h2').forEach(function(header) {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling; // Get the content after the header
      content.classList.toggle('open'); // Toggle the open class
      content.style.display = content.style.display === 'block' ? 'none' : 'block'; // Toggle visibility

      // Toggle the active state of the header
      this.classList.toggle('active');
    });
  });


  // Image gallery leider keinen weg gefunden die dynamisch aus dem ordner zu fetchen
  const imageGallery = document.querySelector('.image-gallery');
  const imageDir = '/works/n-pola/04-results/images/';
  const imageFiles = [
    'polarek-nils-ba-ss24-bilddokumentation-01-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-02-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-03-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-04-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-05-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-06-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-07-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-08-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-09-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-10-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-11-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-12-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-13-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-14-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-15-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-16-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-17-s.webp',
    'polarek-nils-ba-ss24-bilddokumentation-18-s.webp'
  ];
  
  let currentIndex = 0; // Track the current image
  
  // Loop through each image file and create an <img> element for it
  imageFiles.forEach(function(imageFile, index) {
    const img = document.createElement('img');
    img.src = `${imageDir}${imageFile}`;
    img.alt = `Bild aus dem Projektverlauf - ${imageFile}`;
    img.classList.add('gallery-image');
    
    // Add click event to show the image in lightbox
    img.addEventListener('click', function() {
      showImageInLightbox(index);
    });
    
    imageGallery.appendChild(img);
  });
  
  // Lightbox elements
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeBtn = document.querySelector('.close-btn');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  
  // Show image in lightbox
  function showImageInLightbox(index) {
    currentIndex = index;
    lightboxImage.src = `${imageDir}${imageFiles[currentIndex]}`;
    lightboxCaption.textContent = `Bild ${currentIndex + 1} von ${imageFiles.length}`;
    lightboxModal.style.display = 'block';
  }
  
  // Close the lightbox
  closeBtn.addEventListener('click', function() {
    lightboxModal.style.display = 'none';
  });
  
  // Show the previous image
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? imageFiles.length - 1 : currentIndex - 1;
    showImageInLightbox(currentIndex);
  });
  
  // Show the next image
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex === imageFiles.length - 1) ? 0 : currentIndex + 1;
    showImageInLightbox(currentIndex);
  });
  
  // Close lightbox when clicking outside of the image
  lightboxModal.addEventListener('click', function(e) {
    if (e.target !== lightboxImage && e.target !== nextBtn && e.target !== prevBtn) {
      lightboxModal.style.display = 'none';
    }
  });
  
