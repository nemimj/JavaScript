// const user = "neminath";
// console.log(user); // this will shows error because user already been created in otherScript.js

// We use IIFE to avoid these (Immediately Invoked Function Expression)
(function () {
  const user = "nemianth";
  console.log(user);
})();

// passing parameter
(function hello(name) {
  console.log(name);
})("Nemi");

hello(); // we can't use outside the function
