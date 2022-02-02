function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('[type="number"]');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const boxesToPut = [];
  amount = Number(inputRef.value);
  for (let i = 0; i < amount; i += 1) {

    let newBoxRef = document.createElement("div");

    newBoxRef.style.backgroundColor = getRandomHexColor();
    newBoxRef.style.width = `${30 + 10 * i}px`;
    newBoxRef.style.height = `${30 + 10 * i}px`;
    boxesToPut.push(newBoxRef);
  }
  boxesRef.append(...boxesToPut);
};

btnDestroyRef.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
};



