const Nav = () => {
    const navList = document.createElement('ul');
    navList.innerHTML= 
    `
    <li><a href="">Blog</a></li>
    <li><a href="">About Us</a></li>
    <li><a href="">Careers</a></li>
    `;
    return navList;
};

export default Nav;