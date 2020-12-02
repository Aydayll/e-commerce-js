const Nav = () => {
    const tagNav = document.createElement('ul');
    tagNav.innerHTML= 
    `
    <li><a href="">Blog</a></li>
    <li><a href="">About Us</a></li>
    <li><a href="">Careers</a></li>
    `;
    return tagNav .outerHTML;
};

export default Nav();