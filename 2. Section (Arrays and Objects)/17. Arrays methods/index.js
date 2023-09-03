arr = [1, 2, 34, 54, 91];
arr.push(); // adds the element at the end
arr.pop(); // removes the element at the end
arr.unshift(99); // adds the element at the first
arr.shift(); // removes the element at the first
arr.reverse();
x = arr.includes(200); // checks for the element in the array
x = arr.index0f(340); // index of the array
x = arr.slice(1, 4); // todo: this will not modify the array (starts from index 1 and goes till the index 3) element
x = arr.splice(1, 4); // ! this will modify the array (removes element from (index 1) to (3 elements))
x = arr.splice(3, 1); // starts at the index 3 and delete 1 element
x = arr.splice(1, 4).reverse().tostring().charAt(0); // chaining
console.log(x);
