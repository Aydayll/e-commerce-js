import Contact from './contact.js';
import Nav from './nav.js';
import Logo from './logo.js';
import searchBar from './searchbar.js';
import System from './system.js'
import Layer from './layer.js';
import Basket from './basket.js';

const Header = () => {
    const tagHeader = document.createElement ('header');
    tagHeader.innerHTML = `
    <div class = "contanier">
    <div class="header__top">
        ${Contact}
        ${Nav}
    </div>
    <div class="header__middle">
    ${Logo}
    ${searchBar}
    ${System}
    ${Layer}
    ${Basket}
    </div>
    <div class="header__bottom"></div>
    </div>
    `;
    document.body.append (tagHeader);
const ul = document.querySelector('.search-bar__list');
const h3 = document.querySelector('.search-bar__title');
h3.addEventListener('click', () => {
    ul.classList.toggle('is-active');
    h3.classList.toggle('is-active');
})
    return tagHeader;
};
Header();