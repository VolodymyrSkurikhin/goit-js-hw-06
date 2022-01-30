const inputRef = document.querySelector('input#name-input');
const spanRef = document.querySelector('span#name-output');
inputRef.addEventListener('input', (event) => {
  if (!(event.currentTarget.value)) { return spanRef.textContent = "Anonymous"};
  spanRef.textContent = event.currentTarget.value;
})
