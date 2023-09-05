// Arrow function
const add = (a, b) => {
  return a + b;
};

// Implicit return
const sub = (a, b) => (a = b);

// can leave of when a single single param
const double = (a) => a * 2;

// Returning an a object
const obj = () => ({
  name: "nemi",
});

console.log(add(10, 15));
console.log(sub(10, 15));
console.log(double(10));
console.log(obj());

// arrow function in callback function
const arr = [1, 2, 3, 4, 5];

arr.forEach((n) => console.log(n));
