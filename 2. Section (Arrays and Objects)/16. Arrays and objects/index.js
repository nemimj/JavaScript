let x;
const arr = [34, 55, 95, 20, 15];
arr.push(100); // adds the element at the end of the array
arr.pop(); // removes the elelment add at the end of the array
arr.unshift(99); // adds element at first
arr.shift(); // removes element at first
arr.reverse(); // reverse the array

x = arr.includes(200); // checks for the element in the array
x = arr.index0f(340); // return the index of the element
x = arr.slice(1, 4); //todo : (this will not modify the array) start from 1 index and goes on to 3 index
x = arr.splice(1, 4); // !: (this will modify the array) starts from the 1 index and take out till the 4 elements
x = arr.splice(3, 1); // starts from the index 3 and take 1 element
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(arr);
