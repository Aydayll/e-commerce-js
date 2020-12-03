const Logo = () => {
    const img = document.createElement('img');
    img.className = "header__logo"
    img.innerHTML= 
    img.src= './src/images/logo.svg';  
    return img.outerHTML;
};
export default Logo();