import Sidebar from '../sidebar/index.js';

const Hero = () => {
    const heroSection =  document.createElement ('section');
    heroSection.className = 'hero'
    heroSection.innerHTML = `
    <div class = "container">
      ${Sidebar()}
    </div>`

    return heroSection.outerHTML;

};
export default Hero ();