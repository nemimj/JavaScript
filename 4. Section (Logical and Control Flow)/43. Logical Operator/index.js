let a;

// && Will return first falsy value or the last value
a = 10 && 20; // output : 20
a = 10 && 20 && 30; // output : 30
a = 10 && 0 && 30; // output : 0
a = 10 && "" && 0 && 30; // output : ''

console.log(a);

const posts = ["Post One", "Post Two"];
//* const posts = [];  if it is empty this will not return anything

posts.length > 0 && console.log(posts[0]);

// || - will return the first truthy value or the last value
let b;
b = 10 || 20; //output : 10
b = 0 || 20; //output : 0
b = 0 || null || "" || undefined; //output : undefined
console.log(b);
