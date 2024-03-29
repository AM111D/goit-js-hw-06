const refs = {
    inputEl: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output')
}
// console.log(inputEl);

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        refs.nameLabel.textContent = 'Anonymous';
    }
}