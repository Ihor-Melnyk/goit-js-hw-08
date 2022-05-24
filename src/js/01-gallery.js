// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const containerGrig = document.querySelector('.gallery');
const markup = createImages(galleryItems);
containerGrig.insertAdjacentHTML('beforeend', markup);

function createImages(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
            `
    }).join('');
}

let gallery = new SimpleLightbox('.gallery a', {
    captionsData : 'alt',
    captionDelay: '250',
});