



  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error); }}
fetchProducts();
function displayProducts(products) {
  const productContainer = document.getElementById("productContainer");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");  
     productElement.innerHTML = `
        <img class = "product-image" src="${product.image}" alt="${product.title}" />
        <h2 class="product-title">${product.title}</h2>
        <p class = "product-description">${product.description}</p>
        <hr class = "w-100%">
         <p class="product-price text-center">$${product.price}</p>
         <hr class = "w-100%">
        <button class = "btn bg-dark text-white ">Details</button>
        <button  id = "addToCart-${product.id}" class = "btn bg-dark text-white">Add to Cart</button> `;
    productContainer.appendChild(productElement);
    let array = JSON.parse(localStorage.getItem("info")) ||  [];   
    const buttonElement = document.getElementById(`addToCart-${product.id}`);
    buttonElement.addEventListener("click", function () { 
      array.push({
        image: `${product.image}`,
        title: `${product.title}`,
        price: `${product.price}`,
        id: `${product.id}`,});localStorage.setItem("info", JSON.stringify(array));});});}

