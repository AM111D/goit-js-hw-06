const refs = {
    inputEl: document.querySelector('#validation-input'),
};
// console.dir(refs.inputEl);
// console.log(refs.inputEl.dataset.length); //6

refs.inputEl.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
  if (refs.inputEl.value.length === Number(refs.inputEl.dataset.length)) {
    refs.inputEl.classList.remove('invalid');
    return refs.inputEl.classList.add('valid');
  }
     refs.inputEl.classList.add('invalid');
}

