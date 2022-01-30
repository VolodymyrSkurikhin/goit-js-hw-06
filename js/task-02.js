const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemsIngr = ingredients.map(ingredient => {
  const el = document.createElement("li");
  el.textContent = ingredient;
  el.classList.add("item");
  return el;
});
const listOfIngr = document.querySelector("#ingredients");
listOfIngr.append(...itemsIngr);


