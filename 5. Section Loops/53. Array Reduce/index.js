const items = [
  { name: "laptop", price: 100 },
  { name: "phone", price: 254 },
  { name: "washing machine", price: 500 },
];

// till the iteration is over all the return is send to total varaible after iteration is over it is send to totalPrice;
const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(totalPrice);

const people = [
  { name: "kyle", age: 25 },
  { name: "John", age: 35 },
  { name: "Sally", age: 45 },
  { name: "Jill", age: 25 },
];

const groupedPeople = people.reduce((total, people) => {
  const age = people.age;
  if (total[age] == null) total[age] = [];
  total[age].push(people);
  return total;
}, {});

console.log(groupedPeople);
