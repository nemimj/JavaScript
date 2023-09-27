const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "nemi" });
  }, 1000);
});

// promise.then((data) => console.log(data));

// async await

async function getPromise() {
  const reponse = await promise;
  console.log(reponse);
}

getPromise();

// Using fetch api
