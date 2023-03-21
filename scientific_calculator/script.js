let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let backSpace = document.getElementById("backSpace");

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
    }

    else if(event.target.innerText === "x"){
      input.value += "*"
    }

    else if(event.target.innerText === "÷"){
      input.value += "/"
    }

    else {
      input.value += event.target.innerText;
    }
  })
);
