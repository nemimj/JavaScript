const firstPromise = new Promise((resolve, reject) => {
  resolve("First");
});
const secondPromise = new Promise((resolve, reject) => {
  resolve("second");
});
const thirdPromise = new Promise((resolve, reject) => {
  resolve("third");
});
const fourthPromise = new Promise((resolve, reject) => {
  resolve("fourth");
});

Promise.all([firstPromise, secondPromise, thirdPromise, fourthPromise])
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("Something Wrong is happened");
  });
