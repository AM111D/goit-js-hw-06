const refs = {
    fontSizeEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text')
};

refs.fontSizeEl.addEventListener('input', onChangeTextSize);

function onChangeTextSize(event) {
 console.log(refs.textEl.style.fontSize = refs.fontSizeEl.value);
 refs.textEl.style.fontSize = refs.fontSizeEl.value + 'px';
}