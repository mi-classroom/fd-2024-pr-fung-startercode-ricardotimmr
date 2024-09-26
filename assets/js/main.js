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