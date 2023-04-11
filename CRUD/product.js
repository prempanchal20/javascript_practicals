let productID_modal = document.querySelector("#productID_modal");
let productName_modal = document.querySelector("#productName_modal");
let productPrice_modal = document.querySelector("#productPrice_modal");
let productImage_modal = document.querySelector("#productImage_modal");
let productDescription_modal = document.querySelector(
  "#productDescription_modal"
);

let addEditProduct = document.querySelector(".addEditProduct");

// Global State for Local Storage Data
let setDataToLocalStorage =
  JSON.parse(localStorage.getItem("localStorageData")) || [];

let pid_modal = document.getElementById("productID_modal");
let pname_modal = document.getElementById("productName_modal");
let pprice_modal = document.getElementById("productPrice_modal");
let pimage_modal = document.getElementById("productImage_modal");
let pdesc_modal = document.getElementById("productDescription_modal");

// Add Product Functionality
const cardContainer = document.querySelector(".card-container");
function loadDOM(setDataToLocalStorage) {
  cardContainer.innerHTML = "";
  setDataToLocalStorage.forEach((element) => {
    cardContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
  <div class="card" id="${element.productID}">
    <img src="${element.productImage}" class="card-img-top" alt="Image" />
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
}

loadDOM(setDataToLocalStorage);

// Update Data Functionality
function updateData(pID) {
  let updatedData = setDataToLocalStorage.find((element) => {
    return element.productID == pID;
  });

  // Show Local Storage Data In Edit Modal
  productID_modal.value = updatedData.productID;
  productName_modal.value = updatedData.productName;
  productPrice_modal.value = updatedData.productPrice;
  productDescription_modal.value = updatedData.productDescription;

  // Update Image in Edit Functionality
  let editImage;
  productImage_modal.addEventListener("change", (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
      editImage = reader.result;
    });
  });

  addEditProduct.addEventListener("click", () => {
    updatedData.productName = productName_modal.value;

    // Store Updated Data in Local Storage
    let index = setDataToLocalStorage.indexOf(updatedData);
    setDataToLocalStorage[index].productName = productName_modal.value;
    setDataToLocalStorage[index].productPrice = productPrice_modal.value;
    setDataToLocalStorage[index].productImage = editImage;
    setDataToLocalStorage[index].productDescription =
      productDescription_modal.value;

    localStorage.setItem(
      "localStorageData",
      JSON.stringify(setDataToLocalStorage)
    );
  });
}

// Delete Data Functionality
function removeProduct(e) {
  const pID = e.getAttribute("data-custom");

  const updatedData = setDataToLocalStorage.filter((element) => {
    return element.productID != pID;
  });

  localStorage.setItem("localStorageData", JSON.stringify(updatedData));
}

// Filter Functionality
let sort_By = document.getElementById("sortBy");
sort_By.addEventListener("click", (event) => {
  sort_By = `${event.target.value}`;

  // Sort by Product ID
  if (sort_By === "productId") {
    setDataToLocalStorage.sort((a, b) => {
      return a.productID - b.productID;
    });
    loadDOM(setDataToLocalStorage);
  }

  // Sort by Product Price
  else if (sort_By === "productPrice") {
    setDataToLocalStorage.sort((a, b) => {
      return a.productPrice - b.productPrice;
    });
    loadDOM(setDataToLocalStorage);
  }

  // Sort By Product Name
  else if (sort_By === "productName") {
    setDataToLocalStorage.sort(function (a, b) {
      if (a.productName < b.productName) {
        return -1;
      }
      if (a.productName > b.productName) {
        return 1;
      }
      return 0;
    });
    loadDOM(setDataToLocalStorage);
  }
  // Sorting according to ASC and DESC
  let arrowBtn = document.querySelector(".arrow");
  arrowBtn.addEventListener("click", (event) => {
    if (event.target.value === "ascending") {
      // Sort numbers in ascending order
      setDataToLocalStorage.sort((a, b) => a[sort_By] - b[sort_By]);

      loadDOM(setDataToLocalStorage);
    } else {
      // Sort numbers in descending order
      setDataToLocalStorage.sort((a, b) => b[sort_By] - a[sort_By]);
      loadDOM(setDataToLocalStorage);
    }
  });
});

// Search Functionality
let searchProducts = document.querySelector(".search-prod");
searchProducts.addEventListener("input", (e) => {
  const val = e.target.value;

  let searchProducts = [];
  console.log(val);

  for (i = 0; i < setDataToLocalStorage.length; i++) {
    // console.log(getProduct[i].productName.toLowerCase().includes(search.toLowerCase()));
    if (
      setDataToLocalStorage[i].productName
        .toLowerCase()
        .includes(val.toLowerCase())
    ) {
      searchProducts.push(setDataToLocalStorage[i]);
    }
  }
  loadDOM(searchProducts);
});

// Empty LocalStorage
// let length = setDataToLocalStorage.length;
// console.log(typeof setDataToLocalStorage);
// console.log(length);

// if (length == 0) {
//   location.replace("empty_cart.html");
// } else {
//   location.replace("product.html");
// }

// Empty Cart - Image Show
// Same ID Not Allow
// Alert Box
// CSS Media Query
