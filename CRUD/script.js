let input = document.getElementsByTagName("input");
let productID = document.getElementById("productID");
let productName = document.getElementById("productName");
let productImage = document.getElementById("productImage");
let productPrice = document.getElementById("productPrice");
let productDescription = document.getElementById("productDescription");

// Global State for Local Storage Data
let setDataToLocalStorage =
  JSON.parse(localStorage.getItem("localStorageData")) || [];

// Store Images in Local Storage
let prodImage;
productImage.addEventListener("change", (event) => {
  const image = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.addEventListener("load", () => {
    prodImage = reader.result;
  });
});

// Submit Button Event
const submitBtn = async (event) => {
  event.preventDefault(); // Hold the Page after Submit button clicked

  // Get values from Input
  let productIDValue = productID.value;
  let productNameValue = productName.value;
  let productImageValue = prodImage;
  let productPriceValue = productPrice.value;
  let productDescriptionValue = productDescription.value;

  // Same ProductID Validation
  const productData = setDataToLocalStorage.filter((element) => {
    return element.productID == productIDValue;
  });

  if (productData[0]) {
    alert("ProductID is Same..!!");
  } else {
    await swal("", "Product Added Sucessfully..!!", "success");
    location.replace("product.html");

    let keyValue = {
      productID: productIDValue,
      productName: productNameValue,
      productImage: productImageValue,
      productPrice: productPriceValue,
      productDescription: productDescriptionValue,
    };

    // Push Data on Local Storage in Form of Key-Value Pair
    setDataToLocalStorage.push(keyValue);
    localStorage.setItem(
      "localStorageData",
      JSON.stringify(setDataToLocalStorage)
    );

    // Clear The Data After Form Submit
    productID.value = "";
    productName.value = "";
    productImage.value = "";
    productPrice.value = "";
    productDescription.value = "";
  }
};

const productForm = document.getElementById("productForm");
productForm.addEventListener("submit", submitBtn);
