import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerMarkup = document.querySelector('.gallery');


const resultCreateGalleryContainerMarkup = createGalleryContainerMarkup(galleryItems);
galleryContainerMarkup.innerHTML = resultCreateGalleryContainerMarkup;

function createGalleryContainerMarkup(items) {
    return items.map(({preview, original, description}) => {
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
    `;
    }).join('');
    
}

galleryContainerMarkup.addEventListener('click', onGetUrlOriginalImj);

function onGetUrlOriginalImj(e) {
    e.preventDefault();

const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

instance.show()

galleryContainerMarkup.addEventListener('keydown', onPushEscapeModalClose);
function onPushEscapeModalClose(e) {
  if(e.code === 'Escape') {
    instance.close();
  }
}

}
