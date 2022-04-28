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

/* function findLongestWord(string) {
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

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord('')); */

/* function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i = min; i <= max; i += 1) {
  numbers.push(i);
}
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
console.log(createArrayOfNumbers()); */

/* function filterArray(numbers, value) {
  // Change code below this line

  const newNumbers = [];

for (const number of numbers) {
  if (number > value) {
newNumbers.push(number);
  }
}
return newNumbers;

 // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20)); */

/* function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple"));
console.log(checkFruit('')); */

/* function getCommonElements(array1, array2) {
  // Change code below this line

const array3 = [];

for (const el of array1) {
  if (array2.includes(el)) {
    array3.push(el);
  }
}

return array3;

 // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); */

/* function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const el of order) {
    total += el;
  }

  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([])); */

/* function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {
      if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20)); */

/* const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */

/* function getEvenNumbers(start, end) {
  // Change code below this line

const array = [];

for (let i = start; i <= end; i += 1) {

  if(i % 2 === 0) {
    array.push(i);
  }

}
return array;

   // Change code above this line
 }

 console.log(getEvenNumbers(2, 5));
 console.log(getEvenNumbers(3, 11));
 console.log(getEvenNumbers(6, 12));
 console.log(getEvenNumbers(8, 8));
 console.log(getEvenNumbers(7, 7)); */

/* const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
} */
