const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeAListOfIngredients = array => {
  return array.map(element => {
    const itemEl = document.createElement('li');
    itemEl.textContent = element;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const listOfItems = makeAListOfIngredients(ingredients);

const mainList = document.querySelector('#ingredients');
mainList.append(...listOfItems);