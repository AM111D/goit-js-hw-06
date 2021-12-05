const inputEl = document.getElementById('name-input');
const otputEl = document.getElementById('name-output');

otputEl.style.color = 'red';


inputEl.addEventListener('input', (event) => {
    if (otputEl.textContent = event.currentTarget.value) {
    } else {
        (otputEl.textContent = '') 
            otputEl.textContent = "Anonymous";
        }
    });