// parent scope
function parent() {
  let x = 10;

  // child scope
  function child() {
    let y = 20;
    console.log(x + y);
  }

  console.log(y); //* we can access the child function variables in parent function
}

//* same for the conditionals also
