function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorButton = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

colorButton.addEventListener('click', oncolorButtonClick);

function oncolorButtonClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorText.textContent = bodyEl.style.backgroundColor;
}