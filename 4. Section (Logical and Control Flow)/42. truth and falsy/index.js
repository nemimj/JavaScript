// Falsy Values:
// - false
// - 0
// - "" or ' (Empty string)
// — null
// undefined
// - NaN

// Truthy Values:
// — Everything else that is not falsy
// true
// - 0' (0 in a string)
// - ' '(space in a string)
// - false' (false in a string)
// — [] (empty array)
// — {} (empty object)
// — function ( ) { } (empty function)

const x = "false";
if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}
console.log(Boolean(x));

// Truthy and falsy cavets
const children = 3;
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number Of children");
}

// Checking for empty arrays
const posts = [];
if (posts.length > 0) {
  console.log("List Post");
} else {
  console.log("No post found");
}

// checking for empty object
const user = {
  name: "Brad",
};
if (Objectkeys(userlength > 0)) {
  console.log("List User");
} else {
  console.tog("No User");
}

// Loose Equality
console.log(false == 0);
console.log(null == undefined);
console.log("" == 0);
