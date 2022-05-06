/* const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
};

console.log(apartment); */

/* const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: 'Henry',
        phone: '982-126-1588',
        email: "henry.carter@aptmail.com",
    },
  };

  console.log(apartment); */

/*   const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Change code above this line

  console.log(aptRating);
  console.log(aptDescr);
  console.log(aptPrice); */

/*   const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[apartment.tags.length - 1];
  // Change code above this line

console.log(ownerName);
console.log(firstTag);
console.log(lastTag);
console.log(numberOfTags); */

/* const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment['rating'];
  const aptDescr = apartment['descr'];
  const aptPrice = apartment['price'];
  const aptTags = apartment['tags'];
  // Change code above this line

  console.log(aptRating);
  console.log(aptDescr);
  console.log(aptPrice);
  console.log(aptTags); */

 /*  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line 

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push('trusted');

console.log(apartment.tags); */

// TASK 7
/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: 'Jamaica',
  city: 'Kingston',
} */

// TASK 8

/* const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags,
  // Change code above this line
};

console.log(product); */

//TASK 9

/* const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam",

  // Change code above this line
};

console.log(credentials); */

//TASK 10

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key])
}

console.log(keys);
console.log(values); */

//TASK 11
/* const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
  
  // Change code above this line
}

console.log(keys);
console.log(values); */

//TASK 12

/* function countProps(object) {
  let propCount = 0;
  // Change code below this line
const keys = [];
for (const key in object) {
  if (object.hasOwnProperty(key)) {
   keys.push(key);
  }
propCount = keys.length;
}
  // Change code above this line
  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); */

//TASK 13

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}

console.log(keys);
console.log(values); */

//TASK 14

/* function countProps(object) {
  // Change code below this line
  let propCount = 0;

propCount = Object.keys(object).length;

 
  return propCount;
  // Change code above this line
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); */

//TASK 15

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment); */

//TASK 16
/* function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line

  const values = Object.values(salaries);

  for (const value of values) {
    totalSalary += value;
  }

  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); */

//TASK 17

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors); */

//TASK 18

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
for (const product of products) {
  if (product.name === productName) {
    return product.price
  }
}

return null;

  // Change code above this line
}

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine")); */

//TASK 19

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line

const allProp = [];

for (const product of products) {

if (product[propName]) {
  allProp.push(product[propName]);
}

}

return allProp;
  // Change code above this line
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category")); */

// TASK 20

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }

return 0;

  // Пиши код выше этой строки
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Scanner")); */

// TASK 21

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


console.log(meanTemperature); */

//TASK 22

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { 
  yesterday, 
  today, 
  tomorrow, 
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" 
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(icon);
console.log(meanTemperature);
 */

//TASK 23

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line


const { 
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" 
} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

console.log(meanTemperature);
console.log(highIcon); */

//TASK 24

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
} */

// TASK 25

/* const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const { 
  today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
  tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
 } = forecast; */

 //TASK 26

 // Change code below this line
/* function calculateMeanTemperature(forecast) {

const {
  today: {  low: todayLow, high: todayHigh },
  tomorrow: {low: tomorrowLow, high: tomorrowHigh},
} = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })); */

// TASK 27

/* const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore);
console.log(worstScore); */

//TASK 28

/* const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ... thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores); */

//TASK 29

/* const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};
 */

//TASK 30

/* function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line

return {category, priority, ...data, completed};
  // Change code above this line
}

console.log(makeTask({}));
console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
console.log(makeTask({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" })); */

//TASK 31

// Change code below this line
/* function add(...args) {
  let total = 0;
for(const el of args) {
  total += el;
}
  return total;
  // Change code above this line
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36)); */

//TASK 32

// Change code below this line
/* function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > number) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); */

//TASK 33

// Change code below this line
/* function findMatches(args1, ...args2) {
  const matches = []; // Don't change this line
for (const el of args2) {
  if (args1.includes(el)) {
    matches.push(el)
  }
}
  // Change code above this line
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); */

//TASK 34 

/* const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },

  // Change code above this line
}; */

// TASK 35

/* const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    this.books.splice(this.books.indexOf(oldName), 1, newName);
    
    return this;

    // Change code above this line
  },
};

console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
console.log(bookShelf.updateBook("The last kingdom", "Dune")); */

// TASK 36 - 39

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line

    this.potions.splice(this.potions.indexOf(potionName), 1);
    return this.potions;


    // Change code above this line
  },
}; */

// TASK 40

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
this.potions.splice(this.potions.indexOf(oldName), 1, newName);

return this.potions;

    // Change code above this line
  },
}; */

//TASK 41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {

      if (this.potions.name === newPotion.name) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions())
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));

