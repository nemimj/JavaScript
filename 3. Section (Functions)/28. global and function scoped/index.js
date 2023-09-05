const x = 100; // global scoped

function global() {
  const x = 300; // function scoped
  console.log(x);
}

global();
console.log(x);
