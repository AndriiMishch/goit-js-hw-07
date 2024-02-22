import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const element = createElement(galleryItems);
galleryContainer.innerHTML = element;

function createElement(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
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