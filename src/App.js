import Header from './components/header/index.js';
import Home from './pages/home.js';
import Ayday from './Ayday.js';
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const root = () => {
const rootDiv = document.createElement ('div');

rootDiv.setAttribute('id', 'root');

rootDiv.append(Header());
rootDiv.append(Home ());

document.body.append(rootDiv);

document.body.append(rootDiv);
  Ayday();
  
  var swiper = new Swiper('.reviews', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
return rootDiv;
};
root();