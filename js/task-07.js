const inputRangeRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');
inputRangeRef.addEventListener('input', (event) => {
  spanTextRef.style.fontSize = `${event.currentTarget.value}px`;
});