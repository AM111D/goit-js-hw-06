function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  widgetEl: document.querySelector('.widget'),
  textColorEl: document.querySelector('span.color'),
  btnChangeColor: document.querySelector('.change-color')
};

refs.btnChangeColor.addEventListener('click', onRandomChangeColor);

function onRandomChangeColor(event) {
  // console.log(event);
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  refs.textColorEl.textContent = randomColor;
}