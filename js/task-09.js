function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textColorEl = document.querySelector('span.color');
const changeColorButtonEl = document.querySelector('button.change-color');

changeColorButtonEl.addEventListener('click', updateColor)

function updateColor(event) {
  let randColor = getRandomHexColor()

  document.body.style.backgroundColor = randColor;
  textColorEl.textContent = randColor;
}


