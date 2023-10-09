var dataType = {
  string: "string",
  number: 2,
  boolean: true,
  array: [],
  object: {},
};

// var age = 3;
// if (age > 3) {
//   return true;
// }
const check = (number) => {
  if (number > 3) {
    return true;
  }
};
// check(4);

const person = {
  name: "Gian",
  age: 29,
};
const checkAge = (person) => {
  if (person.age >= 21) {
    return console.log("legal age");
  } else {
    console.log("not old enough");
  }
};
// checkAge(person);

const array = [1, 2, 3];

const indexPosition = (position, array) => {
  //   console.log(array[position]);
  if (array[position] === undefined) {
    return console.log("does not exist");
  } else {
    console.log(`I found `);
    console.log(array[position]);
  }
};
// indexPosition(1);

const cart = {
  owner: {
    name: "alex",
    money: 500,
  },
  groceries: [
    {
      name: "butter",
      price: 3,
      barcode: "234jn5",
    },
    {
      name: "candy",
      price: 5,
      barcode: "98sdfg",
    },
    {
      name: "steak",
      price: 15,
      barcode: "89dfg8",
    },
  ],
};

const cartInfo = (cart) => {
  console.log(`hello ${cart.owner.name} you have $ ${cart.owner.money}`);
};
// cartInfo(cart);

const getGroceryList = (cart) => {
  console.log(`here are the grocery items in ${cart.owner.name} cart.`);
  console.log(cart.groceries);
};
// getGroceryList(cart);

const getGroceryItem = (cart, position) => {
  indexPosition(position, cart.groceries);
};
getGroceryItem(cart, 2);
