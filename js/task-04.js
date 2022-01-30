const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');
let counterValue = 0;
btnDecrementRef.addEventListener("click", () => {
  counterValue -= 1;
  return counterValueRef.textContent = counterValue;
 
});
btnIncrementRef.addEventListener("click", () => {
  counterValue += 1;
  return counterValueRef.textContent = counterValue;
});
