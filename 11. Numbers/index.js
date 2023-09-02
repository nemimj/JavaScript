let x;
const num = new Number(5.4527);
x = num.toString();
x = num.toString().length;
x = num.toFixed(2); // this will convert the number to string (upto 2 decimal point)
x = num.toPrecision(2); // this will only print the 2 numbers
x = num.toExponential(2);
x = num.toLocaleString("ar-EG");
x = num.value0f();
X = Number.MAX_VALUE; //Output: 1.7976931348623157e+308
X = Number.MIN_VALUE; //Output: 5e-324 (approximately)
console.log(x);

const date = new Date();
const dateFormat = date.toLocaleString();
console.log(dateFormat);
