let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let backSpace = document.getElementById("backSpace");
let trigonometry = document.getElementById("trigonometry");

// Degree to Radiant Functionality
function btnDegToRad(inputVal, btnVal) {
  // console.log(typeof inputVal);
  if (inputVal === "") {
    alert("Please Enter Input Value!");
  }
  if (btnVal === "DEG") {
    let pi = Math.PI;
    input.value = inputVal * (180 / pi);
    degToRad.innerText = "RAD";
  } else {
    let pi = Math.PI;
    input.value = inputVal * (pi / 180);
    degToRad.innerText = "DEG";
  }
}

// EXP Functionality
function exponential(num) {
  let valExp = num.search("exp");
  console.log(valExp);

  if (valExp === 1) {
    let split_exp = num.split("exp ");
    console.log("split exp method ", split_exp);
    split_exp.slice(1, 0, "10");
    console.log("abc", split_exp);
    input.value = Number(split_exp[0] * split_exp[1] ** split_exp[2]);
  } else if (num == "mod") {
    let split_mod = value.split(" mod ");
    console.log(split_mod);
    input.value = Number(split_mod[0] % split_mod[1]);
  } else if (value.includes("10 x"));
  let splitTen = value.split("*");
  let multiplication = 10;
  for (let i = 1; i < Number(splitTen[1]); i++) {
    multiplication = multiplication * 10;
  }
}

// Factorial Functionality
function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else return num * factorial(num - 1);
}

// Trignometry
function trigno(type, num1) {
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
      console.log("Trigonometry - Default");
      break;
  }
}

function plusMinusOperator(num) {
  input.value = -num;
}

// Button Click Event
buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    let inputVal = input.value;

    if (event.target.innerText === "=") {
      console.log(input.value);

      // Trigonometry Function
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
    } else if (event.target.innerText === "MR") {
      input.value = localStorage.getItem("input.value");
    } else if (event.target.innerText === "MC") {
      input.value = localStorage.removeItem("input.value");
    } else if (event.target.innerText === "M+") {
      input.value = Number(localStorage.getItem("inputVal")) + input.value;
    } else if (event.target.innerText === "M-") {
      input.value = input.value - Number(localStorage.getItem("InputVal"));
    } else if (event.target.innerText === "MS") {
      input.value = localStorage.setItem("inputVal", input.value);
    } else if (event.target.innerText === "x") {
      input.value += "*";
    } else if (event.target.innerText === "exp") {
      input.value = exponential("exp ");
    } else if (event.target.innerText === "mod") {
      input.value = exponential("mod ");
    } else if (event.target.innerText === "÷") {
      input.value += "/";
    } else if (event.target.innerText === "C") {
      input.value = "";
    } else if (event.target.innerText === "e") {
      input.value += "2.71 *";
    } else if (event.target.innerText === "π") {
      π = 3.14;
      input.value = input.value * π;
    } else if (event.target.innerText === "x2") {
      input.value = Math.pow(input.value, 2);
    } else if (event.target.innerText === "n!") {
      input.value = factorial(input.value);
    } else if (event.target.innerText === "x") {
      input.value = "^";
    } else if (event.target.innerText === "1/x") {
      input.value = `1/`;
    } else if (event.target.innerText === "|x|") {
      input.value = Math.abs(input.value);
    } else if (event.target.innerText === "√") {
      input.value = Math.sqrt(input.value);
    }
     else if(event.target.innerText === '10 x'){
      input.value = "10*"
    }
    else if (event.target.innerText === "log") {
      input.value = Math.log(input.value) / Math.LN10;
    } else if (event.target.innerText === "ln") {
      input.value = Math.log(input.value);
    } else if (event.target.innerText === "+/-") {
      plusMinusOperator(input.value);
    } else if (event.target.innerText === "Sin") {
      input.value = "Sin ";
    } else if (event.target.innerText === "Cos") {
      input.value = "Cos ";
    } else if (event.target.innerText === "Tan") {
      input.value = "Tan ";
    } else if (event.target.innerText === "Round") {
      input.value = Math.round(input.value);
    } else if (event.target.innerText === "Ceil") {
      input.value = Math.ceil(input.value);
    } else if (event.target.innerText === "Floor") {
      input.value = Math.floor(input.value);
    } else {
      input.value += event.target.innerText;
    }
  })
);
