let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

// Button Click Event
buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    // console.log(event);
    input.value += event.target.innerText;
    // let operators = ["+", "-", "*", "/", "x"];
    // switch (event.target.innerText) {
    //   case "=":
    //     // input.value=eval(input.value)
    //     // let result = eval(input.value);
    //     console.log(eval(input.value));
    // }
    let inputVal = input.value;
    if (event.target.innerText === "=") {
      console.log(input.value);
      let newVal = inputVal.substring(0, inputVal.length - 1);
      console.log(newVal);
      console.log(eval(newVal));
      input.value = eval(newVal);
    }
  })
);
