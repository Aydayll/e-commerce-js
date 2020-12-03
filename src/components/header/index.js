import Contact from './contact.js';
import Nav from './nav.js';
import Logo from './logo.js';
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
    ${Layer}
    ${Basket}
    </div>
    <div class="header__bottom"></div>
    </div>
    `;
    document.body.append (tagHeader);
    return tagHeader;
};
Header();