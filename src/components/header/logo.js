const Logo = () => {
    const tagLogo = document.createElement('div');
    tagLogo.innerHTML= `
    <a href="index.html">
     <img src= './src/images/logo.svg'/>
    <a/>
    `;
    return tagLogo.outerHTML
};
export default Logo();