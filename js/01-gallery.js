import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);


function createItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
            return `<li class="gallery__item">
    <a class="gallery__link" href=${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`;
        })
        .join("");
}

galleryContainer.addEventListener("click", onClick);

function onClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains("gallery__image")) {
        return; 
    }

        const instance = basicLightbox.create(`
        <img src= '${e.target.dataset.source}' width='800' height='600'>`);

        instance.show()
} 