const boxContent = document.getElementById("box-content");

async function getData() {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjNjMGQ0YmUzZDAwMTU4NDVmZTYiLCJpYXQiOjE2NjgwODQ2NzIsImV4cCI6MTY2OTI5NDI3Mn0.th59j7oiC_O44r-9CiBPXT06JHcIRfYqdq_Ew_isJJk",
        },
      }
    );
    const productsList = await response.json();
    displayProducts(productsList);
    console.log(productsList);
    products = productsList;
  } catch (err) {
    console.error(err.message);
  }
}

async function displayProducts(productsList) {
  productsList.forEach((item) => {
    boxContent.innerHTML += `
    <div class="col mb-4 card-box">
     <div class="card mb-3 ">
       <img src="${item.imageUrl}" class="card-img-top imagem" alt="${item.name}" />
       <div class="card-body">
       <h5 class="card-title truncate">${item.name}</h5>
         <h5 class="card-title truncate">${item.description}</h5>
         <h5 class="card-title truncate">${item.price}</h5>
         <a class"col" href="details.html?productId=${item._id}">VIEW DETAILS</a>
       </div>
     </div>
    </div>`;
  });
}

window.onload = async () => {
  getData();
};
