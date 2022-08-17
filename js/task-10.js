function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const rangeInput = document.querySelector('input');
const boxesGroup = document.querySelector('#boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', onDestroyButtonClick);


function onCreateButtonClick() {
  createBoxes(rangeInput.value);
}

function onDestroyButtonClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    const PIXEL_SIZE = `${30 + i * 10}px`;
    divEl.style.width = PIXEL_SIZE;
    divEl.style.height = PIXEL_SIZE;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesGroup.append(divEl);
  }
}

function destroyBoxes() {
  boxesGroup.textContent = '';
}