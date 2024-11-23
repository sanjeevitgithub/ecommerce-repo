
fetch("https://fakestoreapi.com/products") 
   .then(response => response.json()) 
   .then(products => { 
      displayProducts(products)  
   }) 
   
function displayProducts(products){ 
    const jeweleryContainer = document.getElementById("jeweleryContainer") 
   let arrayObject =  products.filter(product => product.category === "jewelery")
   arrayObject.forEach(product => { 
       const jeweleryElement = document.createElement("div"); 
       jeweleryElement.classList.add("product");
       jeweleryElement.innerHTML = `  
            <img class = "product-image" src = "${product.image}" alt = "${product.title}" /> 
            <h2 class = "product-title">${product.title}</h2>
            <p class = "product-description">${product.description}</p> 
            <hr class = "w-100%">
            <p class = "product-price text-center">${product.price}</p>
            <hr class = "w-100%">
            <button class = "btn bg-dark text-white">Details</button>
         <button class = "btn bg-dark text-white">Add to Cart</button>
       `
    
       jeweleryContainer.appendChild( jeweleryElement);  
   })

    
}