import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainerMarkup = document.querySelector('.gallery');


function createGalleryContainerMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                title="${description}"
            />
        </a>
    `;
    }).join('');
    
}

const resultCreateGalleryContainerMarkup = createGalleryContainerMarkup(galleryItems);
galleryContainerMarkup.innerHTML = resultCreateGalleryContainerMarkup;


let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	/* let captionsData = 'sdhfhdh';
    let captionPosition = 'bottom';
    let captionDelay = 300; */
   
});



gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});