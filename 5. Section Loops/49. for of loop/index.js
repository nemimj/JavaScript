// loop through arrays

const items = ["name", "sec", "class", "division", "post"];

for (const item of items) {
  console.log(item);
}

//  loop through strings
const myString = "hello world";

for (const letter of myString) {
  console.log(letter);
}

// loop over maps

const map = new Map();
map.set("name", "john");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}

const arrObj = [
  { name: "nemi", std: "1" },
  { name: "nath", std: "2" },
];

arrObj.forEach((element) => {
  console.log(element.name, element.std);
});
