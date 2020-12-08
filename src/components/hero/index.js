const Hero = () => {
    const heroSection =  document.createElement ('section');
    heroSection.className = 'hero'
    heroSection.innerHTML = `
    <div class = "container">
    
    </div>`

    return heroSection.outerHTML;

};
export default Hero ();