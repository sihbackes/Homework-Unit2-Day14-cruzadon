const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

async function getProduct() {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/product/${productId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjNjMGQ0YmUzZDAwMTU4NDVmZTYiLCJpYXQiOjE2NjgwODQ2NzIsImV4cCI6MTY2OTI5NDI3Mn0.th59j7oiC_O44r-9CiBPXT06JHcIRfYqdq_Ew_isJJk",
      },
    }
  );
  const product = await response.json();
  return product;
}

function renderProduct(product) {
  const boxContent = document.querySelector("#product-details");
  console.log(boxContent);
  boxContent.innerHTML = `
  <h1 class="display-4">${product.name}</h1>
  <p>${product.description}</p>
  <h3 class="mb-3">${product.price}€<h3>
  <h6 class="pl-2 py-3 bg-light">Server Details</h6>
  <img src="${product.imageUrl}" class="card-img-top imagem" alt="${product.name}" />
  <ul class="list-group list-group-flush mb-4">
    <li class="list-group-item pl-2"><b>id: </b>${product._id}</li>
    <li class="list-group-item pl-2"><b>createdAt: </b>${product.createdAt}</li>
    <li class="list-group-item pl-2"><b>updatedAt: </b>${product.updatedAt}</li>
  </ul>`;
}

window.onload = async () => {
  const product = await getProduct();
  renderProduct(product);
};

async function onDelete() {
  try {
    if (confirm("Do you really want to delete this event?")) {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjNjMGQ0YmUzZDAwMTU4NDVmZTYiLCJpYXQiOjE2NjgwODQ2NzIsImV4cCI6MTY2OTI5NDI3Mn0.th59j7oiC_O44r-9CiBPXT06JHcIRfYqdq_Ew_isJJk",
        },
      };
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/product/${productId}`,
        options
      );
      if (response.ok) {
        window.location.assign("index.html");
      } else {
        alert("Error while deleting!");
      }
    }
  } catch (error) {
    alert(`Some erorr occured: ${error}`);
  }
}

function onEdit() {
  window.location.assign(`backoffice.html?productId=${productId}`);
}
