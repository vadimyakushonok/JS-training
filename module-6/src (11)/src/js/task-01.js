const categoriesEl = document.querySelectorAll(' .item ');
console.log('Number of categories: ', categoriesEl.length);
console.log(categoriesEl);

const titleCategoriesQuantity = [];

/* categoriesEl.forEach((el) => {
    titleCategoriesQuantity.push(`Category: ${el.querySelector(' h2 ').textContent}
    Elements: ${el.querySelectorAll(' li ').length}`);
});

console.log(...titleCategoriesQuantity); */

categoriesEl.forEach((el) => {
    titleCategoriesQuantity.push(`Category: ${el.querySelector(' h2 ').textContent}`);
    titleCategoriesQuantity.push(`Elements: ${el.querySelectorAll(' li ').length}`);
});
console.log(...titleCategoriesQuantity);

