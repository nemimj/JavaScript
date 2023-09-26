// create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async work
  setTimeout(() => {
    console.log("Async Completed");
    resolve("Data From Resolve");
  }, 1000);
});

promise.then((dataFromResolve) => {
  console.log(dataFromResolve);
  console.log("Promise Consumed");
});

console.log("Hello world");

// promise chaining

new Promise((resolve, reject) => {
  // Do some async work
  setTimeout(() => {
    console.log("Async Completed");
    resolve({ name: "nemi", age: 21 });
  }, 1000);
}).then((obj) => {
  console.log(obj);
});

// how to handle reject

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve("Name : Nemi");
    } else {
      reject("Reject is called");
    }
  }, 1000);
});

getUser
  .then((data) => console.log(data))
  .catch((data) => console.log(data))
  .finally(() => {
    console.log("I will run no matter what ");
  });
