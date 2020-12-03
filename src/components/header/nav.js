const Nav = () => {
    const tagNav = document.createElement('ul');
    tagNav.className = "header__nav"
    tagNav.innerHTML= 
    `
    <li class= "header__nav_li"><a class= "header__nav_a" href="">Blog</a></li>
    <li class= "header__nav_li"><a class= "header__nav_a" href="">About Us</a></li>
    <li class= "header__nav_li"><a class= "header__nav_a" href="">Careers</a></li>
    `;
    return tagNav .outerHTML;
};

export default Nav();