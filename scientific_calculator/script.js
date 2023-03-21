let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let backSpace = document.getElementById("backSpace");
// let factorial = document.getElementById("factorial");

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else return num * factorial(num - 1);
}

// Button Click Event
buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    let inputVal = input.value;
    if (event.target.innerText === "=") {
      console.log(input.value);
      //   console.log(newVal);
      console.log(eval(input.value));
      input.value = eval(input.value);
    } else if (event.target.innerText === "") {
      let backSpace = inputVal.substring(0, inputVal.length - 1);
      console.log(backSpace);
      input.value = backSpace;
    } else if (event.target.innerText === "x") {
      input.value += "*";
    } else if (event.target.innerText === "÷") {
      input.value += "/";
    } else if (event.target.innerText === "C") {
      input.value = "";
    } else if (event.target.innerText === "π") {
      π = 3.14;
      input.value = input.value * π;
    } else if (event.target.innerText === "x2") {
      input.value = Math.pow(input.value, 2);
    } else if (event.target.innerText === "n!") {
      input.value = factorial(input.value);
    } else {
      input.value += event.target.innerText;
    }
  })
);