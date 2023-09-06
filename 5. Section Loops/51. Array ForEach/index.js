const arr = ["hello", "world", "how", "are", "you"];

console.log(arr.__proto__);

arr.forEach(function (ele) {
  console.log(ele);
});

arr.forEach((ele) => console.log(ele));

arr.forEach((index, ele, arr) => console.log(index, ele, arr));

function logSocial(ele) {
  console.log(ele);
}

arr.forEach(logSocial);
