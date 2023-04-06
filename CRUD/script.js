let submitBtn = document.getElementById("submit");
let input = document.getElementsByTagName("input");
let productID = document.getElementById("productID");
let productName = document.getElementById("productName");
let productImage = document.getElementById("productImage");
let productPrice = document.getElementById("productPrice");
let productDescription = document.getElementById("productDescription");

//Global State for Local Storage Data
let setDataToLocalStorage = JSON.parse(localStorage.getItem("data")) || [];
console.log(setDataToLocalStorage);

// Submit Button Event
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Hold the Page after Submit button clicked

  // Get values from Input
  let productIDValue = productID.value;
  let productNameValue = productName.value;
  let productImageValue = productImage.value;
  let productPriceValue = productPrice.value;
  let productDescriptionValue = productDescription.value;

  let keyValue = {
    productID: productIDValue,
    productName: productNameValue,
    productImage: productImageValue,
    productPrice: productPriceValue,
    productDescription: productDescriptionValue,
  };

  setDataToLocalStorage.push(keyValue);

  localStorage.setItem("data", JSON.stringify(setDataToLocalStorage));

  // Clear The Data After Form Submit
  productID.value = "";
  productName.value = "";
  productImage.value = "";
  productID.value = "";
  productPrice.value = "";
  productDescription.value = "";

  // Add Products in DOM

  // Display Data on DOM
});

