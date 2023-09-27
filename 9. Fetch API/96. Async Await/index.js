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

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

getUsers();

// without async

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// async keyword in arrow function

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

getPosts();
