let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let backSpace = document.getElementById("backSpace");

// Factorial Functionality
function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else return num * factorial(num - 1);
}

// Trignometry
function trigno(type, num1) {
  console.log("Num Value", num1);
  switch (type) {
    case "Sin":
      input.value = Math.sin((`${num1}` * Math.PI) / 180.0);
      break;

    case "Cos":
      input.value = Math.cos((`${num1}` * Math.PI) / 180.0);
      break;

    case "Tan":
      input.value = Math.tan((`${num1}` * Math.PI) / 180.0);
      break;

    default:
      console.log("default");
      break;
  }
}

// Button Click Event
buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    let inputVal = input.value;

    // Performed Eval()
    if (event.target.innerText === "=") {
      console.log(input.value);

      if (input.value.includes("Sin")) {
        let trig = input.value;
        let trig__num = trig.split(" ");
        let numArray = trig__num[1];
        let type = trig__num[0];
        trigno(type, numArray);
      } else if (input.value.includes("Cos")) {
        let trig = input.value;
        let trig__num = trig.split(" ");
        let numArray = trig__num[1];
        let type = trig__num[0];
        trigno(type, numArray);
      } else if (input.value.includes("Tan")) {
        let trig = input.value;
        let trig__num = trig.split(" ");
        let numArray = trig__num[1];
        let type = trig__num[0];
        trigno(type, numArray);
      } else {
        input.value = eval(input.value);
      }
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
    } else if (event.target.innerText === "log") {
      input.value = Math.log(input.value);
    } else if (event.target.innerText === "ln") {
      input.value = Math.log(input.value);
    } else if (event.target.innerText === "Sin") {
      input.value = "Sin ";
    } else if (event.target.innerText === "Cos") {
      input.value = "Cos ";
    } else if (event.target.innerText === "Tan") {
      input.value = "Tan ";
    } else {
      input.value += event.target.innerText;
    }
  })
);
