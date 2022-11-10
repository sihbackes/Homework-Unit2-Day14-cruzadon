const addBtn = document.querySelector(".post-btn");

const addNewProduct = async () => {
  //**creating my object and getting values from input */
  const newProduct = {
    name: document.querySelector(".product-name").value,
    description: document.querySelector(".product-description").value,
    brand: document.querySelector(".product-brand").value,
    imageUrl: document.querySelector(".product-image").value,
    price: Number(document.querySelector(".product-price").value),
  };
  console.log(JSON.stringify(newProduct));
  //**calling the API and posting  */
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjNjMGQ0YmUzZDAwMTU4NDVmZTYiLCJpYXQiOjE2NjgwODQ2NzIsImV4cCI6MTY2OTI5NDI3Mn0.th59j7oiC_O44r-9CiBPXT06JHcIRfYqdq_Ew_isJJk",
        },
        body: JSON.stringify(newProduct),
      }
    );
  } catch (err) {
    console.error(err.message);
  }
};

addBtn.addEventListener("click", addNewProduct);
