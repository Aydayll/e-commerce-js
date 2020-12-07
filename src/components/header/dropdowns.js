const DropDowns = (title) =>{
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const ulTitles =[
        'Bakery',
        'Fruit and vegetables',
        'Meat and fish',
        'Drinks',
        'Kitchen',
        'Special nutrition',
        'Baby',
        'Pharmacy',
    ];
const newArray= ulTitles.map((item) =>{
    const h3= document.createElement('h3');
    h3.className = 'dropdown__title';
    h3.innerHTML = item;
    return h3;
});
div.innerHTML = `${newArray.map((item)=> item.outerHTML).join('')}
;`
return div.outerHTML
};
export default DropDowns();