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

// Loop through each image file and create an <img> element for it
imageFiles.forEach(function(imageFile) {
  const img = document.createElement('img');
  img.src = `${imageDir}${imageFile}`;
  img.alt = `Bild aus dem Projektverlauf - ${imageFile}`;
  img.classList.add('gallery-image');
  imageGallery.appendChild(img);
});
