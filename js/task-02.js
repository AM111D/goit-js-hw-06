const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refParrentEl = document.querySelector('ul#ingredients');
let liElementsArray = ingredients.map(currentValue => {
  const newElementRef = document.createElement('li');
  newElementRef.classList.add('indgridients__item');
  newElementRef.textContent = currentValue;
  return newElementRef;
});
  
  refParrentEl.append(...liElementsArray);


// list.applend(...li)




// const list = document.querySelector('#ingredients')

// const ingredientsEl = document.createElement('li');
// ingredientsEl.textContent = ingredients;
// ingredientsEl.classList.add('item')
// const ulEl = document.getElementById(ingredients)

// for (let i = 0; i < ingredients.length; i += 1) {
//   const option = ingredients[i];
//   const li = document.createElement('li');
// li.textContent = ingredients;
//   li.classList.add('item')
//  console.log(option.)
// }

// console.log(li)


// list.append(ingredientsEl);







// const element = ingredients.map(option => {
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.classList.add('item')
//   ingredientsEl.textContent = ingredients;

//   return ingredientsEl
// });

// console.log()

