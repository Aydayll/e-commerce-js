const Basket= () => {
    const img = document.createElement ('img');
    img.className ="header__basket"
    img.innerHTML = 
  img.src = './src/images/basket.svg'
 return img.outerHTML;
};
export default Basket();