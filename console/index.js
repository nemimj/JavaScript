console.log("Hello world");

console.error("this is my error");

console.warn("this is my warning");

// Group
console.group("Group A");
console.log("hello");
console.error("this is my group");
console.groupEnd();

// Table
console.table({ name: "nemi", age: 22 });

// Css styles in console
const style = "padding: 10px; background-color:white; color:grey;";
console.log("%cHello world", style);
