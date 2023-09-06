let age = 20;
let canVote = age >= 18 ? true : false;

// multiple statments

if (true) {
  console.log("hello world");
  ("second line");
} else {
  console.log("hello else");
  ("second line");
}

let multi =
  age >= 18
    ? (console.log("hello"), "second line")
    : (console.log("else "), "second line");

// we can't use only if statment when we use ternary statment

age >= 18 ? console.log("you can vote") : null;

age >= 18 && console.log("You can vote");
