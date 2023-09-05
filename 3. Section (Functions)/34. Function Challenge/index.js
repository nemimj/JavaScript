function getCelsius(f) {
  return `The temperature is ${((f - 32) * 5) / 9}`;
}
console.log(getCelsius(32));

// Arrow Function :  const getCelsius = f => ((f - 32) * 5) / 9;

const minMax = (numbers) =>
  `Min : ${Math.min(...numbers)} Max : ${Math.max(...numbers)}`;
console.log(minMax([1, 2, 3, 4, 5]));

((length, width) => {
  const area = length * width;
  const output = `The area of a rectange is ${area}`;
  console.log(output);
})(10, 20);
