document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById("products");

  // Dummy data for products
  const products = [
    { name: "Product 1", price: "$10" },
    { name: "Product 2", price: "$20" },
    { name: "Product 3", price: "$15" },
    { name: "Product 4", price: "$25" },
    { name: "Product 5", price: "$30" },
  ];

  // Function to render products
  function renderProducts() {
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
      productCard.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.price}</p>
      `;
      productsContainer.appendChild(productCard);
    });
  }

  // Render products initially
  renderProducts();
});
