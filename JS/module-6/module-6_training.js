/* elem.parentNode - выберет родителя elem.
elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа). */

const liAllEl = document.querySelectorAll('li');

console.log(liAllEl);

const firstEl = document.querySelector(' .training-li ');
console.log(firstEl);


console.log(firstEl.parentNode);

const listEl = document.querySelector('ul');
console.log(listEl);

listEl.classList.add('title.list');

console.log(listEl.firstElementChild);
console.log(listEl.firstChild);

console.log(firstEl.nextElementSibling);

console.log(firstEl.previousElementSibling);

const image = document.querySelector('.image');

console.log(image.hasAttribute('src'));
console.log(image.getAttribute('alt'));
image.removeAttribute('alt');
console.log(image.hasAttribute('alt'));
console.log(image.getAttribute('alt'));

image.setAttribute('alt', "WOW it's cool");
console.log(image.getAttribute('alt'));

console.log(image.attributes);



const article = document.querySelector(".article");
console.log(article.innerHTML);

const Atitle = document.querySelector(".article .title");
console.log(Atitle.innerHTML);

const Atext = document.querySelector(".article .text");
console.log(Atext.innerHTML);

const Alink = document.querySelector(".article .link");
console.log(Alink.innerHTML);



const container = document.createElement('div');
container.classList.add('container');
const title = document.createElement('h1');
title.textContent = 'This is new create';
title.classList.add('title');
const list = document.createElement('ul');
list.classList.add('list');
const listElement = document.createElement('li');
const ref = document.createElement('a');
ref.classList.add('li-ref');
ref.textContent = 'This is ref and it is very good';
listElement.append(ref);
list.append(listElement);

container.append(title, list);


document.body.append(container);














