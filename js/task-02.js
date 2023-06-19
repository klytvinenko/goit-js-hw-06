const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const listUl = document.createElement('ul');
// listUl.id = 'ingredients';



// const listItem = document.createElement('li');
// listItem.classList.add('item');

// listUl.appendChild(listItem);
// console.log(listUl);

const ulEl = document.getElementById('ingredients');
const liElements = ingredients.map((ingredient) => {
let liEl = document.createElement('li')
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;
  
})
ulEl.append(...liElements);
console.log(ulEl);;

