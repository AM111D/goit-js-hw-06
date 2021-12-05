const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const counterValue = document.getElementById('value');

decrementEl.addEventListener('click', () => {
    counterValue.textContent -= 1;
});
incrementEl.addEventListener('click', () => {
    counterValue.textContent ++;
});