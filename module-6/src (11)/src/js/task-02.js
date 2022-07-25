const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const items = [];

  ingredients.forEach((el) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');
  items.push(itemEl);
});

const list = document.getElementById('ingredients');
list.append(...items);


