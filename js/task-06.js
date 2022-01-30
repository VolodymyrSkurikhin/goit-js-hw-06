const inputEl = document.querySelector('input[data-length="6"]');

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid")
  }
  else { inputEl.classList.add("invalid") };
});