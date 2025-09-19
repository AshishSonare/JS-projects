let btn = document.querySelectorAll("button");
let inputBox = document.querySelector(".inputBox input");

let firstValue = "";
let secondValue = "";
let operator = "";

btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "+") {
      firstValue = inputBox.value;
      operator = "+";
      inputBox.value = "";
    } else if (button.innerText === "-") {
      firstValue = inputBox.value;
      operator = "-";
      inputBox.value = "";
    } else if (button.innerText === "*") {
      firstValue = inputBox.value;
      operator = "*";
      inputBox.value = "";
    } else if (button.innerText === "/") {
      firstValue = inputBox.value;
      operator = "/";
      inputBox.value = "";
    } else if (button.innerText === "=") {
      secondValue = inputBox.value;
      if (operator === "+") {
        inputBox.value = parseFloat(firstValue) + parseFloat(secondValue);
      } else if (operator === "-") {
        inputBox.value = parseFloat(firstValue) - parseFloat(secondValue);
      } else if (operator === "*") {
        inputBox.value = parseFloat(firstValue) * parseFloat(secondValue);
      } else if (operator === "/") {
        inputBox.value = parseFloat(firstValue) / parseFloat(secondValue);
      }
    } else if (button.innerText === "Clr") {
      inputBox.value = "";
      firstValue = "";
      secondValue = "";
      operator = "";
    } else {
      inputBox.value += button.innerText;
    }
  });
});
