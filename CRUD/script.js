let submitBtn = document.getElementById("submit");
let productID = document.getElementById("productID");
let productName = document.getElementById("productName");
let productImage = document.getElementById("productImage");
let productPrice = document.getElementById("productPrice");
let productDescription = document.getElementById("productDescription");

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

  // console.log("keyValue is:- ", keyValue);
  // console.log(Object.keys(keyValue));
  // console.log(Object.values(keyValue));

  //Store Values In Localstorage
  let data = [];
  data.push({
    productID: productIDValue,
    productName: productNameValue,
    productImage: productImageValue,
  });
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
});
