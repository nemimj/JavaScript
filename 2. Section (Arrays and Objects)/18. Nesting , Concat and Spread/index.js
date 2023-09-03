let x;

const fruit = ["apple", "banana", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

fruit.push(berries);

x = fruit[3][1];

const allFruits = [fruit, berries];

fruit.concat(berries); // this will add the berries array to fruit

// Spread operator
x = [...fruit, ...berries];

// Flatten Array
x = [1, 2, ...fruit, [342, 2], ...berries];
x = x.flat();
console.log(x);

// Static methods
x = Array.isArray("Hello"); // this will checks for array

x = Array.from("12345"); // this will convert the string of numbers of , each character array ['1','2'...]

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); // converts the varaibles to array
