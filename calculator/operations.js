const display = document.querySelector(".display");
const operators = Array.from(document.querySelectorAll(".operators"))
const keys = document.querySelectorAll(".keys button");
const operatorsArray = [];
const keysArray = [];

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.preventDefault();

    if (key.innerHTML !== "AC" && key.innerHTML !== "=") {
      addDigit(key.innerHTML);
    } else if (key.innerHTML === "=") {
      equals();
      operatorsArray.splice(0, operatorsArray.length - 1);
    } else {
      display.innerHTML = "0";
      operatorsArray.splice(0, operatorsArray.length - 1);
    }
  })
})

function addDigit(key) {
  if (operators.some(operator => operator.innerHTML === key)) {
    if (!operatorsArray.length) {
      display.innerHTML += key;
    } else {
      return true;
    }
  } else {
    if (display.innerHTML === "0") {
      display.innerHTML = key;
    } else {
      display.innerHTML += key;
    }
  }
}

function equals() {
  operators.find(operator => {
    if (display.innerHTML.includes(operator.innerHTML)) {
      const calculation = display.innerHTML.split(operator.innerHTML);
      switch (operator.innerHTML) {
        case "+":
          display.innerHTML = +calculation[0] + +calculation[1];
          break;
        case "-":
          display.innerHTML = +calculation[0] - +calculation[1];
          break;
        case "/":
          display.innerHTML = +calculation[0] / +calculation[1];
          break;
        case "*":
          display.innerHTML = +calculation[0] * +calculation[1];
          break;
      }
    }
  });
}