



let adProduct = JSON.parse(localStorage.getItem('products')) || [];
const productsWrapper = document.querySelector('[data-products]');
// const adminBody = document.getElementById('adminBody');
// const productModal = new bootstrap.Modal(document.getElementById('productModal'));

// let products = JSON.parse(localStorage.getItem('products')) 
// ||
//  [
//             {
//                 "id": 1,
//                 "name": "shea butter",
//                 "amount": 400,
//                 "image" :"https://i.postimg.cc/26gcFT8F/Sunny-Isle-Jamaican-Black-Castor-Oil-SHEA-COCONUT-Intensive-Repair-Masque-16oz-rev-23524-removebg-p.png"
//             },
//             {
//                 "id": 2, 
//                 "name": "Edge Gel",
//                 "amount": 250,
//                 "image" :"https://i.postimg.cc/wvMcrNbf/Sunny-Isle-Jamaican-Black-Castor-Oil-Edge-Gel-3-5oz-52359-removebg-preview.png"
//             },
//             {
//                 "id": 3,
//                 "name": "peppermint jamaican black castor oil",
//                 "amount": 600,
//                 "image" :"https://i.postimg.cc/1zHJ2sRt/sunny-isle-peppermint-jamaican-black-castor-oil-4oz-and-butter-with-applicator-bottle-71946-removeb.png"
//             },
//             {
//                 "id": 4,
//                 "name": "Rosemary Mint Hair",
//                 "amount": 100,
//                 "image" :"https://i.postimg.cc/FKQyhqCL/Sunny-Isle-Rosemary-Mint-Hair-and-Strong-Roots-Butter-3oz-99200-removebg-preview.png"
//             },
//             {
//                 "id": 5,
//                 "name": "Extra-Virgin-Coconut-Oil",
//                 "amount": 750,
//                 "image" :"https://i.postimg.cc/7LWTfWm9/Sunny-Isle-Organic-Organic-Exta-Virgin-Coconut-Oil-4-Oz-with-applicator-11971-removebg-preview.pngg"
//             },
            
//         ];
// localStorage.setItem('products', JSON.stringify(products));
// return defaultProducts;

// function displayProducts() {
//     productsWrapper.innerHTML = "";
//     if (products.length > 0) {
//         products.forEach(product => {
//             productsWrapper.innerHTML += `
//             <div class="card">
//             <img src="${product.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${product.name}</h5>
//               <p class="card-text">Amount: R${product.amount}</p>
//               <button class="btn" onclick='addToCart(${JSON.stringify(product)})'>Add To Cart</button>
//             </div>
//           </div> 
//           `;
//         });
//     } else {
//         productsWrapper.innerHTML = "No product";
//     }
// }

function disProducts() {
    productsWrapper.innerHTML = '';

    adProduct.forEach(product => {
        // const row = document.createElement('tr');
        productsWrapper.innerHTML = `
        <tr>
           <td>${product.name}</td>
           <td>${product.length}</td>
           <td>R${product.amount }</td>
           <td>
                <button onclick="deleteProduct(${product.id})">Delete</button>
                <button onclick="editPros(${product.id})">Edit</button>
            </td>
        </tr>
            `;
        // adminBody.push(row);
    });
}
disProducts()
function addPros() {
    const insert = {
        id: adPros.length + 1,
        price: "New Price",
        amount: 0
    };
    adPros.push(insert);
    localStorage.setItem('products', JSON.stringify(adPros));
    disPros();
}

function deleteProduct(productId) {
    adPros = adPros.filter(product => product.id !== productId);
    localStorage.setItem('products', JSON.stringify(adPros));
    disProduct();
}

function editProduct(productId) {
    alert(`Edit product with ID ${productId}`);
    
}

displayProducts();
disPros();
