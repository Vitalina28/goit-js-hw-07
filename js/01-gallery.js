import { galleryItems } from './gallery-items.js';
// Change code below this line

const pictureContainer = document.querySelector('.gallery');
const picturesMarkup = creatPictureCardsMarkup(galleryItems);

pictureContainer.insertAdjacentHTML('beforeend', picturesMarkup);
pictureContainer.addEventListener('click', onPictureClick);
pictureContainer.addEventListener('keydown', onPictureClose);


function creatPictureCardsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item js-gallery">
  <a class="gallery__link js-gallery" href="${original}">
    <img
      class="gallery__image js-gallery"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('');
};



  function onPictureClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
      return;
    }
      const pictureEl = evt.target.dataset.source;
      const currentImage = galleryItems.find(({ original }) => original ===
        pictureEl);
   
      const instance = basicLightbox.create(`
   <img src="${currentImage.original}" alt="${currentImage.description}">
   `);
  
    instance.show();
};

function onPictureClose(e) {
  if (e.key = 'Enter') {
    instance.close();
  }
};

  



