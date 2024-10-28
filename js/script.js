document.addEventListener('DOMContentLoaded', function() {

    const gallery = document.querySelector('.gallery');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    console.log(gallery, lightbox, lightboxImage, lightboxClose);

    gallery.addEventListener('click', function(event) {
        console.log(event.target);
        if(event.target.tagName === 'IMG') {
            lightbox.classList.add('active');
            lightboxImage.src = event.target.src;
        }
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', function(event) {
        if(event.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });


});