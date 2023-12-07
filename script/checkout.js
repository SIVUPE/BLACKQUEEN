
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
            <td>R${eval(`${items[key][0].amount }* ${items[key].length}`)}</td> 
        </tr>
     `;
    }
        
};
displayCheckout() 




// function updateTotalAmount() {
//     let total = 0;
//     const rows = document.querySelectorAll('table[data-checkout] tbody tr');
//     rows.forEach(row => {
//         const quantity = parseInt(row.querySelector('.quantity').textContent);
//         const amount = parseFloat(row.querySelector('.amount').textContent.replace('$', ''));
//         total += quantity * amount;
//     });
// }
// updateTotalAmount()

// document.getElementById('totalAmount').textContent = total.toFixed(2);

// Function to clear the cart
function clearCart() {
    const tbody = document.querySelectorAll('[data-checkout]');
    tbody.innerHTML = "";
    updateTotalAmount();
}


 // Function to place an order
 function placeOrder() {
    alert('Order placed! Thank you for shopping with us.');
    clearCart();
}
  

  