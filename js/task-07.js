const rangeInput = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

rangeInput.addEventListener('input', onrangeInputInput);

function onrangeInputInput(event) {
    output.style.fontSize = `${event.currentTarget.value}px`;
}