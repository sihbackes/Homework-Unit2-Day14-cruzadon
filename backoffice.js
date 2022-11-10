const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

window.onload = async () => {
  if (productId) {
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

    let postBtn = document.querySelector("#post-btn");
    postBtn.innerText = "Edit Product";
    postBtn.classList.remove("btn-primary");
    postBtn.classList.add("btn-success");

    document.querySelector("#product-name").value = product.name;
    document.querySelector("#product-description").value = product.description;
    document.querySelector("#product-price").value = product.price;
    document.querySelector("#product-brand").value = product.brand;
    document.querySelector("#product-image").value = product.urlImage;
  }
};

async function addNewProduct(event) {
  event.preventDefault();
  const newProduct = {
    name: document.querySelector("#product-name").value,
    description: document.querySelector("#product-description").value,
    brand: document.querySelector("#product-brand").value,
    imageUrl: document.querySelector("#product-image").value,
    price: Number(document.querySelector("#product-price").value),
  };

  const options = {
    method: productId ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjNjMGQ0YmUzZDAwMTU4NDVmZTYiLCJpYXQiOjE2NjgwODQ2NzIsImV4cCI6MTY2OTI5NDI3Mn0.th59j7oiC_O44r-9CiBPXT06JHcIRfYqdq_Ew_isJJk",
    },
    body: JSON.stringify(newProduct),
  };
  console.log(options);
  try {
    const endpoint = productId
      ? `https://striveschool-api.herokuapp.com/api/product/${productId}`
      : "https://striveschool-api.herokuapp.com/api/product/";

    const response = await fetch(endpoint, options);
    if (response.ok) {
      alert(
        productId
          ? "Appointment edited successfully!"
          : "Appointment created successfully!"
      );
    } else {
      throw new Error("ERROR WHILE EXECUTING THE TRY BLOCK!");
    }
  } catch (error) {
    console.error(error);
  }
}
