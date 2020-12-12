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
    
  
 return section.outerHTML;
};
export default Reviews;