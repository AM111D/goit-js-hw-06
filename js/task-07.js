const fontSizeEl = document.getElementById('font-size-control')
const sliderTextEl = document.getElementById('text')


fontSizeEl.addEventListener('input', () => {
    sliderTextEl.style.fontSize = fontSizeEl.value + 'px'
});