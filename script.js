async function getData() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/"
  );
  const listOfBooks = await response.json();
  return listOfBooks;
}

getData();
