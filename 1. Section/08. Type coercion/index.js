let x;
x = 5 + "5"; // output : 55
x = 5 + Number("5"); // output : 10
x = 5 * "5"; // output : 25
x = 5 + null; // output : 5
x = Number(null); // output : 0
X = Number(true); // output : 1
X = Number(false); // output : 0
x = 5 + true; // output : 6
x = 5 + false; // output : 5
x = 5 + undefined; // ouput : Nan
console.log(x, typeof x);
