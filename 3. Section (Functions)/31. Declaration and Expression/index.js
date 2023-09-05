// function declaration
dec(); // this is because of hoisting
function dec() {
  console.log("Hello world");
}

// exp()
const exp = function (value) {
  console.log("Hello world");
};

exp(); //! we can't call this before expression
