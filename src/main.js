import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api';
import { getGallery } from './js/render-functions';

const formInput = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

let lightbox;

formInput.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.text.value.toLowerCase();

  if (inputValue === '') {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: 'black',
      color: 'red',
      position: 'topRight',
    });
    return;
  }

  getImages(inputValue)
    .then(images => {
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', getGallery(images));
      lightbox = new SimpleLightbox('.gallery a', {});
      lightbox.refresh();
    })
    .catch(err => console.log(err))
    .finally(() => formInput.reset());
}
