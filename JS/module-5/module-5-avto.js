//TASK 1

/* const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    // Change code below this line
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);
  
      if (!isPizzaAvailable) {
        return `Sorry, there is no pizza named «${pizzaName}»`;
      }
  
      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
    // Change code above this line
  };

  console.log(pizzaPalace.checkPizza("Smoked"));

  console.log(pizzaPalace.order("Smoked")); */

  //TASK 2

 /*  const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Change code above this line
  };
  
  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, "Steak");
  console.log(customer.getBalance()); // 19750
  console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"] */

  //TASK 3
  
/*   const historyService = {
    orders: [
      { email: "jacob@hotmail.com", dish: "Burrito" },
      { email: "solomon@topmail.net", dish: "Burger" },
      { email: "artemis@coldmail.net", dish: "Pizza" },
      { email: "solomon@topmail.net", dish: "Apple pie" },
      { email: "jacob@hotmail.com", dish: "Taco" },
    ],
    // Change code below this line
    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(" - ");
    },
    getEmails() {
      const emails = this.orders.map(order => order.email);
      const uniqueEmails = new Set(emails);
      return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
      return this.orders.filter(order => order.email === email);
    },
    // Change code above this line
  };

  console.log(historyService.getOrdersLog());

  console.log(historyService.getEmails());

  console.log(historyService.getOrdersByEmail("artemis@coldmail.net")); */

  //TASK 4

/*   const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
  };
  // Change code below this line
  
  const child = Object.create(parent);
  
  // Change code above this line
  child.name = "Jason";
  child.age = 27;

  console.log(child.heritage);

  console.log(parent);

  console.log(child); */

  //TASK 5

/* const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27; */

// Change code above this line

//TASK 6 
//Используя ключевое слово class объяви класс Car с пустым телом.
/* 
class Car {}; */

//TASK 7
/* Добавь классу Car метод constructor который принимает три параметра:

brand - марка автомобиля.
model - модель автомобиля.
price - цена автомобиля.
Класс Car должен создавать объект с одноимёнными свойствами brand, 
model и price, значениями которых должны быть переданные аргументы во время 
её вызова с оператором new. */

/* class Car {
    // Change code below this line
  constructor(brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
  }
  
  
    // Change code above this line
  } */

  //TASK 8
/*   class Car {
    // Change code below this line
    constructor({brand, model, price}) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    // Change code above this line
  }
const Car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 })

  console.log(Car1); */

  //TASK 9
/*   class Car {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    // Change code below this line
  getPrice() {
      return this.price;
  }

  changePrice(newPrice) {
      return this.price = newPrice;
  }
  
  
    // Change code above this line
  }
  const Car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });



console.log(Car1.getPrice());
console.log(Car1.changePrice(200));

console.log(Car1); */

//TASK 10


/* class Storage {
    constructor(items) {
       this.items = items;
    }

    getItems() {
return this.items;
    }

    addItem(newItem) {
return this.items.push(newItem);
    }

    removeItem(itemToRemove) {

return this.items.splice(this.items.indexOf(itemToRemove), 1);

    }

}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
 */

//TASK 11

/* class StringBuilder {
    constructor(initialValue) {
this.value = initialValue;
    }

    getValue() {
        return this.value;
    }

    padEnd(str) {
        this.value += str;
        return
    }

    padStart(str) {
        this.value = str + this.value;
        return 
    }

    padBoth(str) {
        this.value = `${str}${this.value}${str}`;
        return
    }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^=" */

//TASK 12
/* class Car {
    // Change code below this line
  #brand;
  model;
  price;

    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.model = model;
      this.price = price;
    }
    getBrand(){
        return this.#brand;
    }

    changeBrand(newBrand) {
        return this.#brand = newBrand;
    }
    // Change code above this line
  } */

  //TASK 13

/*   class Storage {
    // Change code below this line
  #items;

    constructor(items) {
      this.#items = items;
    }
  
    getItems() {
      return this.#items;
    }
  
    addItem(newItem) {
      this.#items.push(newItem);
    }
  
    removeItem(itemToRemove) {
      this.#items = this.#items.filter(item => item !== itemToRemove);
    }
  }
  
  // Change code above this line
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"] */

  //TASK 14

/*   class StringBuilder {
    // Change code below this line
  #value;

    constructor(initialValue) {
      this.#value = initialValue;
    }
  
    getValue() {
      return this.#value;
    }
  
    padEnd(str) {
      this.#value += str;
    }
  
    padStart(str) {
      this.#value = str + this.#value;
    }
  
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }
  
  // Change code above this line
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^=" */

  //TASK 15

/*   class Car {
  // Change code below this line
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

 set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
} */

//TASK 16
class Car {
    // Change code below this line
    #price;
  
    constructor({ price }) {
      this.#price = price;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
      this.#price = newPrice;
    }
    // Change code above this line
  }
  
  const audi = new Car({ price: 35000 });
  console.log(audi.price); // 35000
  
  audi.price = 49000;
  console.log(audi.price); // 49000
  
  audi.price = 51000;
  console.log(audi.price); // 49000

