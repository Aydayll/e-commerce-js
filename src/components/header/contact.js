const Contact = () => {
    const contactList = document.createElement('ul');
    contactList.className ="header__contact"
    contactList.innerHTML= 
    `
    <li class= "header__nav_li"><a href="">Chat With Us</a></li>
    <li class= "header__nav_li"><a href="">+420 336 775 664</a></li>
    <li class= "header__nav_li"><a href="">info@freshnesecom.com</a></li>
    `;
    return contactList .outerHTML;
};

export default Contact();