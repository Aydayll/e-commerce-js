const Contact = () => {
    const contactList = document.createElement('ul');
    contactList.innerHTML= 
    `
    <li><a href="">Chat With Us</a></li>
    <li><a href="">+420 336 775 664</a></li>
    <li><a href="">info@freshnesecom.com</a></li>
    `;
    return contactList;
};

export default Contact;