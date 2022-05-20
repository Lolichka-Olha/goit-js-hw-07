import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.innerHTML = createGalleryItems(galleryItems);

gallery.addEventListener("click", onGalleryImageClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

function onGalleryImageClick(event) {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  if (!isGalleryImage) {
    return;
  }

  instance.show();
  console.log(event.target.dataset.source);
}
