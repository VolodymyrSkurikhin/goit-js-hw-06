function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const colorRef = document.querySelector('.color');
const btnColorRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');

btnColorRef.addEventListener('click', onBtnClick);
function onBtnClick() {
  const newColor = getRandomHexColor();
  colorRef.textContent = newColor;
  bodyRef.style.backgroundColor = newColor;
}
