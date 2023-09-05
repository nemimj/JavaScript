const a = 100;

if (true) {
  const b = 200;
  console.log(a + b);
}

// Var , Let , Const

if (true) {
  const x = 100; // block socpe
  let y = 200; // block socpe
  var z = 1; // function scope
}

console.log(x); // throw error
console.log(y); // throw error
console.log(z); // shows

/*note: var is function scoped means this can only be block scoped when it is function (in remaining situation like loops,conditionals it will)
works has global scoped*/

function vars() {
  var v = 100;
  console.log(v);
}

console.log(v);

//! when we use var has global variable it will add that variable to window object
var bar = "bar"; // this will added to window object
