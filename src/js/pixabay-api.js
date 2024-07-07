import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const key = '23547596-77757707a75e05ac426ee1dd8';
const baseUrl = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');

export function getImages(query) {
  getImages;
  const searchParams = new URLSearchParams({
    key: key,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  }).toString();

  const url = `${baseUrl}?${searchParams}`;

  return fetch(url)
    .then(res => {
      showLoader();
      // res це відповідь від сервера
      console.log(res);
      // додаткова перевірка 404 щоб був catch
      if (!res.ok) {
        throw new Error(res.status); // викид помилки - моментально перехід у catch
      }
      return res.json();
    })
    .then(data => {
      if (data.total === 0 && data.totalHits === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'black',
          color: 'red',
          position: 'topRight',
        });
      }
    })
    .finally(() => hideLoader());
}

//   return fetch(url)
//     .then(res => {
//       showLoader();
//       if (!res.ok) {
//         throw new Error(res.status); // Throw error if response is not ok
//       }
//       return res.json(); // Parse JSON response
//     })
//     .then(data => {
//       // Check if no images were found
//       if (data.total === 0 && data.totalHits === 0) {
//         // Display message using iziToast or any other notification library
//         iziToast.show({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           messageColor: 'black',
//           color: 'red',
//           position: 'topRight',
//         });
//       } else {
//         // Process and use the images from data.hits
//         return data.hits;
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching images:', error);
//       // Handle error, e.g., show an error message to the user
//     })
//     .finally(() => hideLoader()); // Hide loader after fetching data
// }

function showLoader() {
  loader.style.visibility = 'visible';
}

function hideLoader() {
  loader.style.visibility = 'hidden';
}
