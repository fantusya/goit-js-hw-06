function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const MIN_PIXEL_SIZE = 30;
let currentPixelSize = MIN_PIXEL_SIZE;

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
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${currentPixelSize}px`;
    divEl.style.height = `${currentPixelSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesGroup.append(divEl);
    currentPixelSize += 10;
  }
}

function destroyBoxes() {
  boxesGroup.textContent = '';
  currentPixelSize = MIN_PIXEL_SIZE;
}