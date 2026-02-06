// js/script.js

const products = [
  {id: 1, name: "Product A"},
  {id: 2, name: "Product B"},
  {id: 3, name: "Product C"}
];

const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name; // can also use product.id
  option.textContent = product.name;
  productSelect.appendChild(option);
});
