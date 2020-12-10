const ProductCard = () =>{
    const div = document.createElement('div');
    const divItem = div.cloneNode();
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const span = document.createElement('span');
    const a = document.createElement('a');
    const flexDiv = div.cloneNode();
    const spanDiscount = span.cloneNode();

    div.className = ' col-4 ';
    divItem.className = 'product__item';
    img.className = 'product__image';
    h3.className = 'product__title';
    p.className = 'product__description';
    a.className = 'product__btn';
    span.className = 'product__price';
    spanDiscount.className = ' product__discount';
    flexDiv.className = ' product__flex';

img.src = 'https://www.tasteofhome.com/wp-content/uploads/2018/09/PieCaken_Full-Cake-1-.jpg'
img.alt = ' The best PieCaken'
a.href = "#"

h3.innerHTML = 'The best PieCaken'
p.innerHTML = 'PieCaken is a three-layer cake with two pies inside.'
span.innerHTML = '1.48 USD'
a.innerHTML = 'Buy now'

 divItem.append(img);
 divItem.append(h3);
 divItem.append(p);
 divItem.append(flexDiv);
 flexDiv.append(span);
 flexDiv.append(a);
 flexDiv.append(spanDiscount);
div.append(divItem);
return div.outerHTML;
};
export default ProductCard();
