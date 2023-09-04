const age = 30;
const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// destructring

const todo = {
  id: 1,
  title: "take out trash",
  user: {
    name: "john",
  },
};

const {
  id: todoId, // renaming varaible
  title,
  user: { name }, // destructuring
} = todo;

console.log(todoId);

// Destructring array

const numbers = [23, 46, 33, 50, 100];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
