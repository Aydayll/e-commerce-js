import Sidebar from '../sidebar/index.js';
import { titleOfSidebar, listItemsOfSidebar, btnTextOfSidebar } from './const.js';
import Banner from './banner.js';

const Hero = () => {
  const heroSection = document.createElement('section');

  heroSection.className = 'hero';

  heroSection.innerHTML = `
	<div class="container">
		<div class="row hero__row">
			${Sidebar(titleOfSidebar, listItemsOfSidebar, btnTextOfSidebar)}
			<div class="hero__content row col-9">${Banner}${Banner}</div>
		</div>
	</div>
	`;

  return heroSection.outerHTML;
};

export default Hero();