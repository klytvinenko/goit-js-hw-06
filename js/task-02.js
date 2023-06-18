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

const navItemEl = document.createElement('ul');
navItemEl.id = 'ingredients';

ingredients.forEach((item) => {
  const navLinkItem = document.createElement('li');
  navLinkItem.classList.add('item');
  navLinkItem.textContent = item;
  navItemEl.appendChild(navLinkItem);
})

// const navLinkItem = document.createElement('li');
// navLinkItem.classList.add('item');
// navItemEl.appendChild(navLinkItem);


console.log(navItemEl);

