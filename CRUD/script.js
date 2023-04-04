let submitBtn = document.getElementById("submit");

// Submit Button Event
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Hold the Page after Submit button clicked
  console.log("btn clicked");
});

let setValues = window.localStorage.setItem(
  "productID",
  "productName",
  "productImage",
  "productPrice",
  "productDescription"
);

// Set Values In Array
setValuesArray = setValues.toArray();
console.log("Set Values", setValues);

let setValuesArray = setValues.split(",");
console.log("Set Values Array- ", setValuesArray);
