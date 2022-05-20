// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerGrig = document.querySelector('.gallery');
const markup = createImages(galleryItems);
containerGrig.insertAdjacentHTML('beforeend', markup);

function createImages(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `
            <div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>
            `
    }).join('');
}

containerGrig.addEventListener('click', onImageClick);
function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const originalImage = e.target.dataset.source;
  modalFullImg(originalImage);
} 

function modalFullImg(link) {
  const instance = basicLightbox.create(`<img src="${link}">`,
    {
      onShow: instance => window.addEventListener('keydown', onEscapePress),
      onClose: instance => window.removeEventListener('keydown', onEscapePress)
    });
   instance.show();

  function onEscapePress(event) {
    if (event.key === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onEscapePress)
  }
}
}



