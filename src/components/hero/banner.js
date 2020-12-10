const Banner = (imgSrc) => {
  const div =  document.createElement('div');
  const h6 = document.createElement('h6');
  const h3 = document.createElement('h3');
  const a = document.createElement('a');
  const img = document.createElement('img');

  div.className = 'col-6 banner';
  h6.className = 'banner__suptitle';
  h3.className = 'banner__title';
  a.className = 'banner__link';
  img.className = 'banner__image';
  img.src = imgSrc ;
  a.href = `#`;


  h6.innerText = `Meal Prep Recipes`;
  h3.innerText = `Tomato foccacia`;
  a.innerHTML = `Read Recipes`;


  div.append(h6);
  div.append(h3);
  div.append(a);
  div.append(img);
  return div.outerHTML;
};
export default Banner;