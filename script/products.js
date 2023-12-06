let products = JSON.parse(localStorage.getItem('products')) ? 
    JSON.parse(localStorage.getItem('products')) : 
    localStorage.setItem('products', JSON.stringify(
        [ 

            {
                "id": 1,
                "name": "shea butter",
                "amount": 400,
                "image" :"https://i.postimg.cc/26gcFT8F/Sunny-Isle-Jamaican-Black-Castor-Oil-SHEA-COCONUT-Intensive-Repair-Masque-16oz-rev-23524-removebg-p.png"
            },
            {
                "id": 2,
                "name": "Edge Gel",
                "amount": 250,
                "image" :"https://i.postimg.cc/wvMcrNbf/Sunny-Isle-Jamaican-Black-Castor-Oil-Edge-Gel-3-5oz-52359-removebg-preview.png"
            },
            {
                "id": 3,
                "name": "peppermint jamaican black castor oil",
                "amount": 600,
                "image" :"https://i.postimg.cc/1zHJ2sRt/sunny-isle-peppermint-jamaican-black-castor-oil-4oz-and-butter-with-applicator-bottle-71946-removeb.png"
            },
            {
                "id": 4,
                "name": "Rosemary Mint Hair",
                "amount": 100,
                "image" :"https://i.postimg.cc/FKQyhqCL/Sunny-Isle-Rosemary-Mint-Hair-and-Strong-Roots-Butter-3oz-99200-removebg-preview.png"
            },
            {
                "id": 5,
                "name": "Extra-Virgin-Coconut-Oil",
                "amount": 750,
                "image" :"https://i.postimg.cc/7LWTfWm9/Sunny-Isle-Organic-Organic-Exta-Virgin-Coconut-Oil-4-Oz-with-applicator-11971-removebg-preview.pngg"
            },
        ]))
        

let productsWrapper = document.querySelector('[data-products]')
//function
function displayProduct(prododo=null) {
    productsWrapper.innerHTML = ""
    prododo = prododo != null ? prododo : products;
    console.log(prododo)
    prododo.forEach((product) => {
        productsWrapper.innerHTML += `
            <div class="card">
              <img src="${product.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Amount: R${product.amount}</p>
                <button class="btn" onclick='addToCart(${JSON.stringify(product)})'>Add To Cart</button>
              </div>
            </div> 
            `;
      });
}
displayProduct() 



//sorting
let sorting = document.querySelector('[ data-products-sort');
sorting.addEventListener('click', () => {
    try {
        let sortedProducts = products.sort((arg1, arg2) => {
            return arg1.amount - arg2.amount;
        });
        displayProduct(sortedProducts);
    } catch (e) {
        console.error(e);
    }
});



//search
let search = document.querySelector('[data-search-product]')
search.addEventListener('keyup',() => {
    try {
        let searchValue = search.value; 
        let productFound = products.filter(product => {
            return product.name.toLowerCase().includes(searchValue.toLowerCase());
        });

        if (productFound.length > 0) { 
            productsWrapper.innerHTML="";
            productFound.forEach(product =>{
                productsWrapper.innerHTML +=`<div class="card">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Amount: R${product.amount}</p>
                  <button class="btn")>Add To Cart</button>
                </div>
              </div> 
              `;
            });
            // displayProduct(productFound);
        } else {
            productsWrapper.innerHTML = "Products not found";
        }
    } catch (e) {
        console.error(e);
    }
});

//ADD TO CART

let Cart = []
function addToCart(item){
    if(item){
        Cart.push(item)
        localStorage.setItem('Cart',JSON.stringify(Cart))
    }
}




  










