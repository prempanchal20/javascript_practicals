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
    <button class="btn btn-primary" type="submit" data-custom=${element.productID} onclick="updateData(this)" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
    <button class="btn btn-danger" type="submit" data-custom=${element.productID} onclick="removeProduct(this)">
      Remove Product
    </button>
  </div>
</div>
</div>`;
});

// Get Data From LocalStorage
// let getDataToLocalStorage = () => {
//   let getLSData = JSON.parse(localStorage.getItem("localStorageData"));
//   location.replace("product.html");
//   return getLSData;
// };

// Update Data Functionality
function updateData(e) {
  const pID = e.getAttribute("data-custom");
  const updatedData = setDataToLocalStorage.find((element) => {
    return element.productID == pID;
  });
  console.log(updatedData);
}

// Delete Data Functionality
function removeProduct(e) {
  const pID = e.getAttribute("data-custom");

  const updatedData = setDataToLocalStorage.filter((element) => {
    return element.productID != pID;
  });

  localStorage.setItem("localStorageData", JSON.stringify(updatedData));
}
