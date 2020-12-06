const System = () => {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
ul.className = 'system__list'
ul.innerHTML = `
<li><a href="#"><img src ="./src/images/layer.svg" alt="layer"/></a></li>
<li><a href="#"><img src ="./src/images/basket.svg" alt="layer"/></a></li>
`;
div.append(ul);

return div.outerHTML;
};
export default System();