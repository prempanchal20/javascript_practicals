//Global State for Local Storage Data

let setDataToLocalStorage =
  JSON.parse(localStorage.getItem("localStorageData")) || [];

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
    <button class="btn btn-primary" type="submit" data-custom=${element.productID} onclick="editProduct(this)">Edit</button>
    <button class="btn btn-danger" type="submit" data-custom=${element.productID} onclick="removeProduct(this)">
      Remove Product
    </button>
  </div>
</div>
</div>`;
});

// Get Data From LocalStorage
let getDataToLocalStorage = () => {
  let getLSData = JSON.parse(localStorage.getItem("localStorageData"));

  location.replace("product.html");
  return getLSData;
};

// Update Data Functionality - click on edit open modal
const formModal = document.querySelector(".modal-body");
formModal.innerHTML = "";
formModal.innerHTML += `<div class="modal-body">
<form>
  <div class="mb-3">
    <label class="form-label required">Product Name</label>
    <input type="text" class="form-control" id="${element.productName}">
  </div>
  <div class="mb-3">
    <label class="form-label required">Product Price</label>
    <input type="email" class="form-control" id="${element.productPrice}">
  </div>
  <div class="mb-3">
    <label class="form-label required">Product Description</label>
    <input type="email" class="form-control" id="${element.productDescription}">
  </div>
</form>
</div>

  <div class="modal-footer">
  <button type="submit" class="btn btn-primary" data-custom=${element.productID} onclick="editProduct(this)">Submit</button>
  <button type="submit" class="btn btn-danger" data-custom=${element.productID} onclick="editProduct(this)">Cancel</button>
  </div>
  </div>
</section>`;

// Delete Data Functionality
function removeProduct(e) {
  const pID = e.getAttribute("data-custom");
  const updatedData = setDataToLocalStorage.filter((element) => {
    return element.productID != pID;
  });

  localStorage.setItem("localStorageData", JSON.stringify(updatedData));
}
