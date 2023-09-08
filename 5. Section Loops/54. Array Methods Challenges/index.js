const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111–1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "444-444-4444",
    age: 23,
  },
];

// find the people who are lesser than 25 and make objeect of each person with their full name and email address
const youngPeople = people
  .filter((ele) => ele.age <= 25)
  .map((per) => ({
    name: per.firstName + " " + per.lastName,
    email: per.email,
  }));

console.log(youngPeople);

// find the positive number and find the total of the them.
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNum = numbers
  .filter((ele) => ele > 0)
  .reduce((total, num) => {
    return total + num;
  }, 0);

console.log(positiveNum);

// make the first word capitalize
const words = ["coder", "worder", "programmer", "developer"];
const capitalizeWords = words.map(
  (word) => word[0].toUpperCase() + word.substring(1)
);
console.log(capitalizeWords);
