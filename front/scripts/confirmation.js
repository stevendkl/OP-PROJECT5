// DOM ELEMENTS
const orderSummary = document.querySelector('#orderId');
const orderError = document.querySelector('.confirmation');

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params)
const id = params.orderId;

function confirmOrder() {
    if (localStorage.getItem('productcart')) {
        orderSummary.textContent = id;
        clearLocalStorage('productcart');        
    } else {
        orderError.innerHTML = 
        `        
        <p align="center">There was an error processing your request.</p>
        `
    }
}

function clearLocalStorage(productcart) {
    localStorage.removeItem(productcart);    
}

confirmOrder();