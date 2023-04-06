
//Global State for Local Storage Data
let setDataToLocalStorage = JSON.parse(localStorage.getItem("data")) || [];
// let htmlCardTemplate = ;
const cardContainer = document.querySelector(".card-container");
cardContainer.innerHTML = "";
setDataToLocalStorage.forEach(element => {
  // console.log(element);
 cardContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
<div class="card" id="${element.productID}">
  <img src="Images/Iphone.png" class="card-img-top" alt="Iphone" />
  <div class="card-body">
    <h5 class="card-title">${element.productName}</h5>
    <p class="card-text">
    ${element.productDescription}
    </p>
    <button class="btn btn-primary" type="submit">Add Product</button>
    <button class="btn btn-danger" type="submit">
      Remove Product
    </button>
  </div>
</div>
</div>`

});