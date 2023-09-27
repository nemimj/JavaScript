try {
  console.log(x);
} catch (error) {
  console.log("Error : " + error);
}

function double(num) {
  if (isNaN(num)) {
    throw new Error(num + "Not a Number");
  }

  return num * 2;
}

try {
  double("hello");
} catch (error) {
  console.log(error);
}
