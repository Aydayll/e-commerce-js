const Reviews = () => {
    const section = document.createElement('section');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const img = document.createElement('img')

    section.className = 'reviews';
    h2.className = 'reviews__title';
    h3.className = 'reviews__author';
    img.className = 'reviews__image';
    p.className = 'reviews__description';
    div.className = 'reviews__item';

    img.src = './src/images/avatar.jpg';
    img.alt = 'avatar';

    p.innerHTML = '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “'
    h3.innerHTML = ' Name and Surname'

    div.append(p)
    div.append(h3)
    div.append(img)
    
  section.innerHTML = `
  ${h2.outerHTML}
  <div class = 'row reviews__row'>
    ${div.outerHTML}
  </div>
  `;
 return section.outerHTML;
};
export default Reviews;