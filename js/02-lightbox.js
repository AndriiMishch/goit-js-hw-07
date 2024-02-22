import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const element = createElement(galleryItems);
galleryContainer.innerHTML = element;

var lightbox = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: 250,
});

function createElement(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join("");
}
