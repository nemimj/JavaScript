// Default Paramter

function registerUser(user = "Bot") {
  return user + " is registered";
}

function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 3, 4, 5, 6));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.pass}`;
}

const user = {
  name: "nemi",
  pass: "hello",
};

console.log(loginUser(user));

// Arrays as params

function random(arr) {
  const num = Math.floor(Math.random() * arr.length);
  const item = arr[num];
  console.log(item);
}

random([1, 3, 4, 5, 9, 0, 183]);
