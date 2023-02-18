import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onImageClick);

//rendering
function createGalleryMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>` 
    }).join("");
}
//create modal

const instance = basicLightbox.create(
  `<img width = "1280" height = "auto" src = "" />`,
{
  onShow: (instance) => {
    window.addEventListener("keydown", onEscKeyDown);
  },
  onClose: (instance) => {
    window.removeEventListener("keydown", onEscKeyDown);
  },
}
);

function onImageClick (e) {
  e.preventDefault();
  const dataSetSource = e.target.dataset.source;
  if (!dataSetSource) return;
  instance.element().querySelector('img').src = dataSetSource;
  instance.show();
}

function onEscKeyDown(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}
