const calculate = (num1, num2, opeartor) => {
  if (opeartor === "+")
    console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`);
  else if (opeartor === "-")
    console.log(`subtraction of ${num1} and ${num2} is ${num1 - num2}`);
  else if (opeartor === "*")
    console.log(`MUtliplication of ${num1} and ${num2} is ${num1 * num2}`);
  else if (opeartor === "/")
    console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
  else console.log("Opeartor is not valid");
};

calculate(1, 10, "+");
calculate(1, 10, "-");
calculate(1, 10, "*");
calculate(1, 10, "/");
calculate(1, 10, "&");
