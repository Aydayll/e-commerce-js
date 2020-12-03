// const searchBar = () => {
    const div = document.createElement('div');
    const arrayOfTitles = ['Bakery', 'asdasd', 'BakeryBakery', 'Bakery'];
    const arrayOflies = ['1', '2', '3', '4'];
    for (let i = 0; i < 4; i++) {
      const ul = document.createElement('ul');
      ul.className = 'search__list';
      ul.innerHTML = `
    <h3>${arrayOfTitles[i]}</h3>
    <li class="search__item">${arrayOflies[0]}</li>
    <li class="search__item">${arrayOflies[1]}</li>
    <li class="search__item">${arrayOflies[2]}</li>`;
      div.append(ul);
    }
    div.className = 'header__searchbar';
  
    return div.outerHTML;
//   };
  
//   export default searchBar();