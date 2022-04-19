/* const string = "javascript";

for (const character of string) {
  console.log(character);
} */

//1
/* function checkAge(age) {
  if(age >= 18) {
    return 'You are an adult';
  }
  return 'You are a minor';
}

console.log(checkAge(18));
console.log(checkAge(25));
console.log(checkAge(12)); */

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
   return "Welcome!";
  }

  return "Access denied, wrong password!";
  // Change code above this line
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam")); */

/* function checkStorage(available, ordered) {
  // Change code below this line
 
  if (ordered === 0) {
    return "Your order is empty!";
  } 
  
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 

  return "The order is accepted, our manager will contact you";
  // Change code above this line
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0)); */

// Change code below this line

/* const fruits = ['apple', 'plum', 'pear', 'orange']; */

/* const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];


console.log(firstElement);
console.log(secondElement);
console.log(lastElement); */

/* const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line

fruits[1] = 'peach';
fruits[3] = 'banana'; */

/* const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

const fruitsArrayLength = fruits.length;

console.log(fruitsArrayLength); */

/* const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log(lastElementIndex);
console.log(lastElement); */

/* function getExtremeElements(array) {
  // Change code below this line

const result = [];
const firstElement = array[0];
const lastElement = array[array.length - 1];

result.push(firstElement, lastElement);

return result;


  // Change code above this line
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); */

/* function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
words = message.split(delimeter)
  // Change code above this line
  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));

console.log(splitMessage("Mango hurries to the train", ","));

const arrayJoin = ['Mango', 'hurries', 'to'];
console.log(arrayJoin.join('_')); */

/* function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
return message.split(' ').length * pricePerWord;


  // Change code above this line
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40)); */

/* function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

string = array.join(delimeter);

  // Change code above this line
  return string;
}

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_")); */

/* function slugify(title) {
  // Change code below this line
return title.toLowerCase().split(' ').join('-')


  // Change code above this line
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); */

/* const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

console.log(fruits.length); */

/* const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

console.log(allClients); */

/* function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

const maxLengthArray = firstArray.concat(secondArray);

if (maxLengthArray.length >= maxLength) {
  return maxLengthArray.slice(0, maxLength);
}

return maxLengthArray;
  // Change code above this line
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); */

/* const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
} */

/* function calculateTotal(number) {
  // Change code below this line
 let total = 0;
 for (let i = 0; i <= number; i += 1) {
  total += i;
 }
 return total;
 
   // Change code above this line
 }

 console.log(calculateTotal(1));
 console.log(calculateTotal(3));
 console.log(calculateTotal(7));
 console.log(calculateTotal(18));
 console.log(calculateTotal(24));
 console.log(calculateTotal()); */

/*  const fruits = ['apple', 'plum', 'pear', 'orange'];

 for (let i = 0; i < fruits.length; i += 1) { // Change this line
   const fruit = fruits[i]; // Change this line
   console.log(fruit);
 }  */

/*  function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i < order.length; i += 1) {
  total += order[i];
}
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([])); */

function findLongestWord(string) {
  // Change code below this line
let longestWord = '';
const words = string.split(' ');

for (const word of words) {
  if (word.length > longestWord.length) {
longestWord = word;
  }
}

return longestWord;

  // Change code above this line
}