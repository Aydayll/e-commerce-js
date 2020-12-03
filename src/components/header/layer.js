const Layer= () => {
    const img = document.createElement ('img');
    img.className ="header__icons"
    img.innerHTML = 
  img.src = './src/images/layer.svg'
 return img.outerHTML;
};
export default Layer();