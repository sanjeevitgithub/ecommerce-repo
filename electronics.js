fetch("https://fakestoreapi.com/products") 
   .then(response => response.json()) 
   .then(products => { 
      displayProducts(products)  
   }) 
   
function displayProducts(products){ 
    const electronics = document.getElementById("electronicsContainer") 
   let arrayObject =  products.filter(product => product.category === "electronics")
   arrayObject.forEach(product => {  
       const productElement = document.createElement("div"); 
       productElement.classList.add("product");
       productElement.innerHTML = ` 
            <img class = "product-image" src = "${product.image}" alt = "${product.title}" /> 
            <h2 class = "product-title">${product.title}</h2>
            <p class = "product-description">${product.description}</p> 
            <hr class = "w-100%">
            <p class = "product-price text-center">$${product.price}</p>
            <hr class = "w-100%">
            <button class = "btn bg-dark text-white">Details</button>
         <button class = "btn bg-dark text-white">Add to Cart</button>
       `
       console.log(productElement) 
       electronics.appendChild(productElement);
   })

    
}
