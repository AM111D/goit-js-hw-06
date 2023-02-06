function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector('div input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  collectionBoxesEl: document.querySelector('#boxes')
};
// console.log(refs.inputEl);

refs.createBtn.addEventListener('click', onCreateBoxes);
refs.destroyBtn.addEventListener('click', onRemoveItems);

function onCreateBoxes(amount) {
  // console.log('test');
  const listCreateItems = [];
  amount = Number(refs.inputEl.value)

  // console.log(amount);
  // listCreateItems.length = amount;
  // console.log(amount);

for (let i = 0; i < amount; i += 1) {

  const boxEl = document.createElement("div");

  boxEl.style.width = 30 + i * 10 + 'px';
  boxEl.style.height = 30 + i * 10 + 'px';
  boxEl.style.backgroundColor = getRandomHexColor();
  
  listCreateItems.push(boxEl);
  refs.collectionBoxesEl.append(...listCreateItems);
};
};
function onRemoveItems(event) {
  refs.collectionBoxesEl.innerHTML = "";
}


