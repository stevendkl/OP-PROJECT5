##//main.js
#const 
server //back-end address 
productsApi //back-end data address
productsApiOrder //back-end order address

#async function xx() 
getContent() //get back-end data


##//index.js
#const 
ProductList //index page html, locate at #items

#function xx()
displayContent() //child function:insert page html

#async function xx()
fetchIndex() //get data, insert page html, check error


##//product.js

#const
id //product ID tag
itemDisplay //index page html, locate at #item-display
colorsOptions //product color options，locate at #colors

#let
basketContent //cart product data in localstorage
addToCartBtn //add product data to cart，locate at #addToCart

#function xx()
displayItem() //child function:insert page html，match product id and replace color option, check error

#async function xx() 
fetchProduct() //get data, insert page html, check error


##//cart.js

#const
cartContent //cart page html locate at #cart__items
basketContent //cart product info，trans from addToCart() in product.js 
//FORM ELEMENTS
firstNameInput //order first name data, locate at #firstName
lastNameInput //order last name data, locate at #lastName
addressInput //order address data, locate at #address
cityInput  //order city data, locate at #city
emailInput //order email data, locate at #email
submitOrderBtn //order submit button, locate at #order
inputArray //delivery info summary

#function xx() 
formValidation() //validate input delivery info
emailvalidation() //validate input email format
enableForm() //remove disabled attribute when cart is not empty
generateNodes() //generate product html list
displayItems() //child function:insert page html
displayTotalPrice() //calculate show order total price and quantity, locate at data-item-price
removeItem() //delete product at cart, locate at .deleteItem

#async function xx()
fetchCart() /displayCart() //insert page html
placeOrder() //post order to back end and get the order Id.

##//confirmation.js
#const
orderSummary //confirmation page html，locate at #orderId
orderDetails //order info，trans from placeOrder() in cart.js

#function xx()
confirmOrder() //insert page html
clearLocalStorage() //clear order data and cart

//END


