let productID_modal = document.querySelector("#productID_modal");
let productName_modal = document.querySelector("#productName_modal")
let productPrice_modal = document.querySelector("#productPrice_modal");
let productImage_modal = document.querySelector("#productImage_modal");
let productDescription_modal = document.querySelector("#productDescription_modal");
let addEditProduct = document.querySelector(".addEditProduct");

// Global State for Local Storage Data
let setDataToLocalStorage =
  JSON.parse(localStorage.getItem("localStorageData")) || [];

let pid_modal = document.getElementById("productID_modal");
let pname_modal = document.getElementById("productName_modal");
let pprice_modal = document.getElementById("productPrice_modal");
let pimage_modal = document.getElementById("productImage_modal")
let pdesc_modal = document.getElementById("productDescription_modal");

// Add Product Functionality
const cardContainer = document.querySelector(".card-container");
cardContainer.innerHTML = "";
setDataToLocalStorage.forEach((element) => {
  cardContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
<div class="card" id="${element.productID}">
  <img src="Images/Iphone.png" class="card-img-top" alt="Iphone" />
  <div class="card-body">
    <h5 class="card-title">${element.productName}</h5>
    <p class="card-text">
    ${element.productDescription}
    </p>
    <button class="btn btn-primary" type="submit" data-custom=${element.productID} onclick="updateData('${element.productID}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
    <button class="btn btn-danger" type="submit" data-custom=${element.productID} onclick="removeProduct(this)">
      Remove Product
    </button>
  </div>
</div>
</div>`;
});

// Update Data Functionality
function updateData(pID) {
  let updatedData = setDataToLocalStorage.find((element) => {
    return element.productID == pID;
  });

  // Show Local Storage Data In Edit Modal
  productID_modal.value = updatedData.productID;
  productName_modal.value = updatedData.productName;
  productPrice_modal.value = updatedData.productPrice;
  productImage_modal.value = updatedData.productImage
  productDescription_modal.value = updatedData.productDescription;

  addEditProduct.addEventListener('click', () => {
    updatedData.productName = productName_modal.value;
    console.log(updatedData);

    // Store Updated Data in Local Storage
    let index = setDataToLocalStorage.indexOf(updatedData);
    setDataToLocalStorage[index].productName = productName_modal.value;
    setDataToLocalStorage[index].productPrice = productPrice_modal.value;
    setDataToLocalStorage[index].productImage = productImage_modal.value;
    setDataToLocalStorage[index].productDescription = productDescription_modal.value;
    localStorage.setItem("localStorageData", JSON.stringify(setDataToLocalStorage));
  })
}

// Delete Data Functionality
function removeProduct(e) {
  const pID = e.getAttribute("data-custom");

  const updatedData = setDataToLocalStorage.filter((element) => {
    return element.productID != pID;
  });

  localStorage.setItem("localStorageData", JSON.stringify(updatedData));
}








// if (setDataToLocalStorage.length = 0) {
//   location.replace("empty_cart.html");
// } else {
//   location.replace('product.html')
// }



// Dynamic Image - First Store Image in Local Storage
// Sort and Filter
// Empty Cart - Image Show
// Same ID Not Allow
// Alert Box
// CSS Media Query