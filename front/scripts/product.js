//get ID from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params)
const id = params.id;

const itemDisplay = document.getElementById('item-display');

let basketContent;

function displayItem(item) {
    itemDisplay.innerHTML = 'Loading...';
    if (id === item._id) 
    {
        // generates html
        itemDisplay.innerHTML = 
        `
        <article>
        <div class="item__img">
          <img src="${item.imageUrl}" alt="${item.altTxt}">
        </div>
        <div class="item__content">

          <div class="item__content__titlePrice">
            <h1 id="title">${item.name}</h1>
            <p>Prix : <span id="price">${item.price}</span>€</p>
          </div>

          <div class="item__content__description">
            <p class="item__content__description__title">Description:</p>
            <p id="description">${item.description}</p>
          </div>

          <div class="item__content__settings">
            <div class="item__content__settings__color">
              <label for="color-select">Chose your color:</label>
              <select name="color-select" id="colors">                  
              </select>
            </div>

            <div class="item__content__settings__quantity">
              <label for="itemQuantity">Number of articles (1-100):</label>
              <input type="number" name="itemQuantity" min="1" max="100" value="1" id="quantity">
            </div>
          </div>

          <div class="item__content__addButton">
            <button id="addToCart">Add to cart</button>
          </div>

        </div>
        </article>
        `;
        // generates colors options
        const colorsOptions = document.querySelector('#colors');
        item.colors.forEach(colours => {
            const optionElement = document.createElement('option');
            optionElement.value = colours;
            optionElement.innerHTML = colours;
            colorsOptions.appendChild(optionElement);
        });
        
        // Adds listener to Add to Cart Button
        let addToCartBtn = document.querySelector('#addToCart');

        function addTocart() 
        {
            if (!localStorage.getItem('productcart')) {
                basketContent = [];
            } else {
                basketContent = JSON.parse(localStorage.getItem('productcart'))
            }

            const colorSelect = document.querySelector("#colors");
            const quantitySelect = document.querySelector("#quantity");

            let productAdd = {
              itemTag: item._id,
              itemColor: colorSelect.value,
              itemQuantity: Number(quantitySelect.value)              
            };            

            //Combine quantities of the same products
            for(var i =0; i<basketContent.length; i++)
            {
              var keyTag = basketContent[i].itemTag;
              var keyColor = basketContent[i].itemColor;
              if (productAdd.itemTag == keyTag && productAdd.itemColor == keyColor) {
                productAdd.itemQuantity += basketContent[i].itemQuantity
                basketContent.splice(i, 1);
              }
            }

            basketContent.push(productAdd);
            localStorage.setItem('productcart', JSON.stringify(basketContent));

            window.location.href = `cart.html`;
        };
        addToCartBtn.addEventListener('click', addTocart);

    } else {
        // display error
        itemDisplay.innerHTML = `Unable to load product data. Please try again later or contact website administrator.`;
           }    
}

async function fetchProduct(query) {
    console.log(query);
    await getContent(query).then(item => {
        displayItem(item);
    })
    .catch(
        (error) => {
        console.log(error);
        // display error
        itemDisplay.innerHTML = `Unable to load product data. Please try again later or contact website administrator.`;}
    )
}

fetchProduct(productsApi + id);