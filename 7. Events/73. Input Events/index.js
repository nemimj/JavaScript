const inputField = document.querySelector("#input");
const optionField = document.querySelector(".option");
const check = document.querySelector("checkbox");

function onInput(e) {
  console.log(e.target.value);
}

function checkBox(e) {
  console.log(e.target.checked); //* use checked
}

function onFocus(e) {
  inputField.style.border = "20px solid blue";
}

function onBlur(e) {
  inputField.style.border = "1px solid transparent";
}

inputField.addEventListener("input", onInput);

// option filed value will be selected from the value field which is mentioned in the html page
optionField.addEventListener("input", onInput);
optionField.addEventListener("change", onInput); // (input and both are the same thing)

check.addEventListener("input", checkBox);

inputField.addEventListener("focus", onFocus); // input is focused
inputField.addEventListener("blur", onBlur); // input is not focused
