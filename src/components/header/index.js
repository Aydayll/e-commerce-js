import Contact from './contact.js';
import Nav from './nav.js';

const Header = () => {
    const tagHeader = document.createElement ('header');
    tagHeader.innerHTML = `
    <div class = "contanier">
    <div class="header__top">
        ${Contact().outerHTML}
        ${Nav().outerHTML}
    </div>
    <div class="header__middle"></div>
    <div class="header__bottom"></div>
    </div>
    `;
    document.body.appendChild (tagHeader);
    return tagHeader;
};
Header();