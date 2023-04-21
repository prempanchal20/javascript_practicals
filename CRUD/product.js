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

// Truncate Product Description
function truncateString(productDescription, num) {
  if (productDescription.length <= num) {
    return productDescription;
  }
  return productDescription.slice(0, num) + "...";
}

// Add Product Functionality
const cardContainer = document.querySelector(".card-container");
function loadDOM(setDataToLocalStorage) {
  console.log("check loadDOM", setDataToLocalStorage);
  cardContainer.innerHTML = "";

  // Empty LocalStorage Functionality
  if (setDataToLocalStorage.length === 0) {
    cardContainer.innerHTML = "";
    cardContainer.innerHTML = `<h4 class="empty_cart_title"> There is No any Product, Please Click on Image to Add Products</h4><a class="empty_cart_img" href="index.html"><img src="Images/empty_cart.png"></a>`;
  } else {
    setDataToLocalStorage.forEach((element) => {
      let desc = truncateString(element.productDescription, 30);

      cardContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
    <div class="card" id="${element.productID}">
    
    <h5 class="card-title">Name: ${element.productName}</h5>
    <div class="card_image">
      <img src="${element.productImage}" class="card-img-top" alt="Image" />
      </div>
      <div class="card-body">
      <div class="card-Data">
      <p class="card-text"><b>
      ID:</b> ${element.productID}
      
      </p>
      <p class="card-text"><b>
        Price:</b> ₹  ${element.productPrice}
      </p>
      </div>
      
        <p class="card-text"><b>
        Description:</b> ${desc}
        </p>

        <div class="buttons">
        <button class="btn btn-primary" type="submit" data-custom=${element.productID} onclick="updateData('${element.productID}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>

        <button class="btn btn-danger" type="submit" data-custom=${element.productID} onclick="removeProduct(this)">
          Remove
        </button>
      </div>
      </div>
    </div>
    </div>`;
    });
  }
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
    setDataToLocalStorage[index].productImage = editImage
      ? editImage
      : updatedData.productImage;
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

  // Alert
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });

      const updatedData = setDataToLocalStorage.filter((element) => {
        return element.productID != pID;
      });

      localStorage.setItem("localStorageData", JSON.stringify(updatedData));
      loadDOM(updatedData);

      console.log("product remove");
    } else {
      swal("Your imaginary file is safe!");
    }
  });
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
  for (i = 0; i < setDataToLocalStorage.length; i++) {
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
