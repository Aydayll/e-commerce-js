const System = () => {
    const div = document.createElement('div');
    const ul = document.createElement('ul');

ul.innerHTML = `
<li><a href="#"></a>I am account</li>
<li><a href="#"></a></li>
`;
div.append(ul);

return div.outerHTML;
};
export default System();