const numberEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberEl.length}`);

const categoryEl = document.querySelectorAll('li.item h2')

for (let i = 0; i < categoryEl.length; i += 1) {
    console.log(`Category: ${categoryEl[i].textContent}`)
    const numberEl = document.querySelectorAll('ul#categories ul');
    console.log(`Elements: ${numberEl[i].children.length}`)
}









// const category = document.querySelector('#categories h2');
// // category.classList.add('item__title')
// console.log(`Category: ${category.textContent}`);


// const elementsEl =document.querySelectorAll('ul')
// console.log(`Elements: ${elementsEl.length}`)

