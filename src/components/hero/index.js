import Sidebar from '../sidebar/index.js';
import {menuData, img1, img2 } from './const.js';
import Banner from './banner.js';

const Hero = () => {
  const heroSection = document.createElement('section');

  heroSection.className = 'hero';

  heroSection.innerHTML = `
	<div class="container">
		<div class="row hero__row">
			${Sidebar(menuData[0].title, menuData[0].listItems,menuData[0].btnText)}
			<div class="hero__content  banner__row row col-9">${Banner (img1)}${Banner (img2)}</div>
		</div>
		<div class="row hero__row">
			${Sidebar(menuData[0].title, menuData[0].listItems,menuData[0].btnText)}
			<div class="hero__content  banner__row row col-9">${Banner (img1)}${Banner (img2)}</div>
		</div>
	</div>
	`;

  return heroSection.outerHTML;
};

export default Hero();