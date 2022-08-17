const counterText = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);

let counterValue = 0;

function onDecrementButtonClick() {
    counterValue -= 1;
    counterText.textContent = counterValue;
}

function onIncrementButtonClick() {
    counterValue += 1;
    counterText.textContent = counterValue;
}