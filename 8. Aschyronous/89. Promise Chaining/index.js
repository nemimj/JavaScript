const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "john" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

promise
  .then((data) => {
    return data.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch(() => {
    return 123;
  })
  .then((x) => {
    console.log("This will return no matter what", x);
  });
