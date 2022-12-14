import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refGallery = document.querySelector('.gallery');

refGallery.innerHTML = createGallery(galleryItems);

function createGallery(data) {
  return data
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;
    })
    .join('');
}
const simplelightboxGallery = new SimpleLightbox('.gallery a');
simplelightboxGallery.on('show.simplelightbox');
