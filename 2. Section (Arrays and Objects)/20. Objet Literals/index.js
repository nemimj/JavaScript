let x;
const person = {
  name: "john",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 main road",
    city: "boston",
    state: "NA",
  },
  hobbies: ["music", "sports"],
};

x = person.name;
x = person["age"];
x = person.address.city;
x = person.hobbies[0];
console.log(x);

person.name = "nemi";

delete person.age;

person.greet = function () {
  console.log("hello world");
};

person.greet();
