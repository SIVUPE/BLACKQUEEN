
let checkout = JSON.parse(localStorage.getItem('Cart')) || []
let cartWrapper = document.querySelector('[data-checkout]')

function displayCheckout() {
    cartWrapper.innerHTML = ""
    let items = Object.groupBy(checkout, item => item.id)
    for (let key in items) {
        cartWrapper.innerHTML += `
        <tr>
            <td>${items[key][0].name}</td>
            <td>${items[key].length}</td>
            <td>R${items[key][0].amount }</td>
            <td>R${eval(`${items[key][0].amount } * ${items[key].length}`)}</td> 
        </tr>
     `;
    }
        
};

displayCheckout() 
// clear cart
let totalWrapper = document.querySelector('[data-total]')
function clearCart() {
    localStorage.removeItem('Cart')
    let tbody = document.querySelector('[data-checkout]');
    tbody.innerHTML = "";
    updateTotalAmount();
}


 // Function to place an order
 function placeOrder() {
    let button = document.querySelector('[data-clear]')
    button.innerHTML =""
    alert('Order placed! Thank you for shopping with us.');

    showThankYouAlert();
}
//total amount
function Amount() {
    let totalAmount = document.querySelector('[data-clear]')
    totalAmount.innerHTML =
    totalWrapper.innerHTML =  `
    <p data-total>Total Amount: R</p>
    `
    totalAmount += +items[key][0].price * items[key].length;
}
displayAmount()

  

  