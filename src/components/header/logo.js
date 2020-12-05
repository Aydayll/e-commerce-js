const Logo = () => {
    const tagLogo = document.createElement('div');
    tagLogo.innerHTML= 
    `
    img.src= './src/images/logo.svg'
    `;
    return tagLogo.outerHTML
};
export default Logo();