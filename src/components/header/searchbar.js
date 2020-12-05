const searchBar = () => {
  const div = document.createElement('div');
  const ul = document.createElement('ul');
ul.innerHTML = `
<h3>All categories</h3>
<li><a href="#">Random Text</a></li>
<li><a href="#">Random Text</a></li>
<li><a href="#">Random Text</a></li>
`;
div.append(ul);

return div.outerHTML;
};
export default searchBar();