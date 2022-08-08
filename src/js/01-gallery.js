// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryPalette = document.querySelector(".gallery");

galleryPalette.addEventListener("click", selectFoto);

createPaletteGallery();

function selectFoto(event) {
  const origImg = event.target.dataset.source;
  console.log(event.target.nodeName);
  if (event.target.nodeName !== "IMG") {
    return;
  }/* 
  console.log(origImg); */
  
  event.preventDefault();

  /* 
  instance.show(); */
}

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,  captionsData: 'alt' });



function createPaletteGallery() {
    const element = galleryItems
 // .map((ingredient) => `<img class="gallery__image" src="${ingredient.preview}" alt="${ingredient.description}"></li>`)
.map((ingredient) => `
  <a class="gallery__link" href="${ingredient.original}">
    <img
      class="gallery__image"
      src="${ingredient.preview}"
      data-source="${ingredient.original}"
      alt="${ingredient.description}"
    />
  </a>`)
  .join("");
    galleryPalette.insertAdjacentHTML("beforeend", element);
}