const numbOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numbOfCategories.length}`);
// console.log(numbOfCategories);
const nameAndNumb = numbOfCategories.forEach(item => { return console.log(`Category: ${item.firstElementChild.textContent}`), console.log(`Elements: ${item.lastElementChild.children.length}`) });
  


