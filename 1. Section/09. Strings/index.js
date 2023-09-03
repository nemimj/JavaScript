let x;
const name = "John";
const age = 31;
X = "Hello, my name is " + name + "and I am " + age + "I years old";

// Template Literals
X = `Hello, my name is ${name} and I am ${age} years
old`;
console.log(x);

// String Properties and Methods
const s = "Hello world"; // * behind the scence this happens : new String("hello world")
x = typeof s;
X = s.length;
// Access value by key
x = s[1];
x = s.__proto__;

// x = "hello world"

X = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf("d");
X = s.substring(2, 5); // from 2 to 5 (llo )
x = s.substring(7); // from 0 to 7  (hello)
x = s.slice(-11, -6); // H start from -11 (hello)
x = x.trim(); // remove the trailing whitespaces
x = s.replace("World", "John"); // replace
x = s.includes("Hell"); // find the string
x = s.value0f(); // gives the value of the object (hello world)
x = s.split(" "); // split the string with spaces
x = s.split(""); // split the string with each character
console.log(x);
