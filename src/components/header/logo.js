const Logo = () => {
    const img = document.createElement('img');
    img.innerHTML= 
    img.src= './src/images/logo.svg';  
    return img.outerHTML;
};
export default Logo();