const counter = {
    value: 0,

    increment() {
        return this.value += 1;
    },

    decrement() {
        return this.value -= 1;
    },
};

const refs = {
    valueCounter: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener('click', function () {
    counter.decrement();
    refs.valueCounter.textContent = counter.value;
    console.log(counter);
});

refs.incrementBtn.addEventListener('click', function () {
    counter.increment();
    refs.valueCounter.textContent = counter.value;
    console.log(counter);
});

