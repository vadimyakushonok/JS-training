/* function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  // Change code below this line
  
  const result = makePizza();
  const pointer = makePizza; */

/*   function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }
  
  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }
  
  // Chande code below this line
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
  }

  console.log(makeMessage('Italiya', deliverPizza));
  console.log(makeMessage('Mehicano', makePizza)); */

  // TASK 3
/*   function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }
  
  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  // Change code below this line
  
  makePizza("Ultracheese", function eatPizza(pizzaName) {
      console.log(`Eating pizza ${pizzaName}`);
  }); */

  // TASK 4
  
/*   const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
     const {pizzas} = pizzaPalace;
      if (pizzas.includes(pizzaName)) {
        return onSuccess(pizzaName);
      }
        return onError(pizzaName);
    },
  };
  // Change code above this line
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  
  // Callback for onError
  function onOrderError(error) {
    return `Error! There is no pizza with a name ${error} in the assortment.`;
  }
  
  // Method calls with callbacks
  console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
  console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
  console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
  console.log(pizzaPalace.order('Vienna', makePizza, onOrderError)); */

  //TASK 5

/*   function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    orderedItems.forEach(item => {
      totalPrice += item;
    });
    
    // Change code above this line
    return totalPrice;
  }

  console.log(calculateTotalPrice([12, 85, 37, 4]));
  console.log(calculateTotalPrice([164, 48, 291]));
  console.log(calculateTotalPrice([412, 371, 94, 63, 176])); */

  //TASK 6

/*   function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line

    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Change code above this line
    return filteredNumbers;
  }

  console.log(filterArray([1, 2, 3, 4, 5], 3));
  console.log(filterArray([1, 2, 3, 4, 5], 4));
  console.log(filterArray([1, 2, 3, 4, 5], 5));
  console.log(filterArray([12, 24, 8, 41, 76], 38));
  console.log(filterArray([12, 24, 8, 41, 76], 20)); */

  //TASK 7

/* function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach(el => {
    if (secondArray.includes(el)) {
      commonElements.push(el);
    }
  });

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); */

//TASK 8

/* // Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
} */

//TASK 9

/* // Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Change code above this line */

//TASK 10

/* // Change code below this line
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line */

//TASK 11

/* // Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
} */

//TASK 12

/* // Change code below this line
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
} */

//TASK 13
/* function changeEven(numbers, value) {
  // Change code below this line

const newNumbers = [...numbers];

for (let i = 0; i < newNumbers.length; i += 1) {
  if (newNumbers[i] % 2 === 0) {
    newNumbers[i] = newNumbers[i] + value;
  };
}

return newNumbers;

}

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); */

//TASK 14

/* const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths); */

//TASK 15
/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);

console.log(titles); */

//TASK 16
/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap(book => book.genres);

console.log(genres); */


//TASK 17

/* // Change code below this line
const getUserNames = users => users.map(user => user.name);

// Change code above this line */

//TASK 18

/* // Change code below this line
const getUserEmails = users => users.map(user => user.email);
// Change code above this line */


//TASK 19
/* const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !==0);

console.log(evenNumbers);
console.log(oddNumbers); */

//TASK 20
/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((el, index, array) => array.indexOf(el) === index);

console.log(allGenres);
console.log(uniqueGenres); */

//TASK 21
/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor); */

//TASK 22
/* // Change code below this line
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
// Change code above this line */

//TASK 23
/* // Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge && user.age < maxAge);
// Change code above this line */

//TASK 24
/* // Change code below this line
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
// Change code above this line */

//TASK 25
/* // Change code below this line
const getFriends = (users) => 
users.flatMap(user => user.friends).filter((el, index, array) => 
array.indexOf(el) === index);
  
// Change code above this line

console.log(getFriends([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
])); */

//TASK 26
// Change code below this line
/* const getActiveUsers = (users) => users.filter(user => user.isActive === true);


// Change code above this line

console.log(getActiveUsers([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
])); */

//TASK 27

/* // Change code below this line
const getInactiveUsers = (users) => users.filter(user => user.isActive === false);
// Change code above this line */

//TASK 28
/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor); */

//TASK 29

/* // Change code below this line
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// Change code above this line */

//TASK 30
/* const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(el => el % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(el => el % 2!== 0);

const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(el => el % 2!== 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd); */

/* //TASK 31
// Change code below this line
const isEveryUserActive = (users) => users.every(user => user.isActive === true);
// Change code above this line */

//TASK 32
/* const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(el => el % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(el => el % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(el => el % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(el => el % 2 !== 0); */

//TASK 33
/* // Change code below this line
const isAnyUserActive = users => users.some(user => user.isActive);
// Change code above this line */

//TASK 34

/* const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((value, el) => {
  return value + el;
}, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length; */

//TASK 35

/* const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((total, {playtime, gamesPlayed} = el) => {
return total + (playtime / gamesPlayed);
}, 0);

console.log(totalAveragePlaytimePerGame); */

//TASK 36
/* // Change code below this line
const calculateTotalBalance = users => users.reduce((total, user) => {return total + user.balance}, 0);
// Change code above this line */

//TASK 37
// Change code below this line
/* const getTotalFriendCount = users => {
   return users.reduce((total, user) => {
     return total + user.friends.length;
   }, 0);
};
// Change code above this line

console.log(getTotalFriendCount([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
])); */

//TASK 38

/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort(); */

//TASK 39

/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a); */

//TASK 40
/* const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a)); */

//TASK 41

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating); */
/* 
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

console.log(inAscendingScoreOrder);
console.log(inDescendingScoreOrder);
console.log(inAlphabeticalOrder); */

//TASK 42

/* // Change code below this line
const sortByAscendingBalance = users => {
   return [...users].sort((a, b) => a.balance - b.balance);
};
// Change code above this line */

//TASK 43
/* // Change code below this line
const sortByDescendingFriendCount = users => {
   return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
// Change code above this line

console.log(sortByDescendingFriendCount([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
])); */

//TASK 44
/* // Change code below this line
const sortByName = users => {
   return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
// Change code above this line */

//TASK 45
/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
.filter(value => value.rating > MIN_BOOK_RATING)
.map(el => el.author)
.sort((a, b) => a.localeCompare(b));


console.log(names); */

//TASK 46
/* // Change code below this line
const getNamesSortedByFriendCount = users => {
   return [...users]
   .sort((a, b) => a.friends.length - b.friends.length)
   .map(el => el.name);
};
// Change code above this line */

//TASK 47
/* // Change code below this line
const getSortedFriends = users => {
   return [...users]
   .flatMap(user => user.friends)
   .filter((user, index, array) => array.indexOf(user) === index)
   .sort((a, b) => a.localeCompare(b));
};
// Change code above this line */

//TASK 48
/* // Change code below this line
const getTotalBalanceByGender = (users, gender) => users
.filter(user => user.gender === gender)
.reduce((total, el) => {
return total + el.balance;
}, 0);
// Change code above this line */


