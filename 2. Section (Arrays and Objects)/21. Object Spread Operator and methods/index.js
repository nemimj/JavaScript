let x;

let obj = new Object();

obj.name = "nemi";
obj.age = 20;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      Ing: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// both are same
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const objArr = [{ name: "nemi" }, { name: "john" }];

x = Object.keys(obj); // keys
x = Object.values(obj); // values
x = Object.entries(objArr);

x = obj.hasOwnProperty("name"); // checks that property is there are not

console.log(x);
