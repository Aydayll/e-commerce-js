const Banner = () => {
  const div =  document.createElement('div');
  const h6 = document.createElement('h6');
  const h3 = document.createElement('h3');
  const a = document.createElement('a');
  const img = document.createElement('img');

  div.className = 'col-6';
  h6.className = 'banner__suptitle';
  h3.className = 'banner__title';
  a.className = 'banner__link';
  img.className = 'banner__image';

  h3.innerText = `ertfyjgkuhjlk`;

  div.append(h3);
  return div.outerHTML;
};
export default Banner();