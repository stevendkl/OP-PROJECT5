// DOM insert
const ProductList = document.querySelector('#items');

function displayContent(items) {
    const htmlContent = items.map(item =>
        //insert HTML
        `
        <a href="product.html?id=${item._id}">
            <article>
              <img src="${item.imageUrl}" alt="${item.name}">
                <h3 class="productName">${item.name}</h3>
                <p class="productDescription">${item.description}</p>
            </article>
          </a>`).join('');
                      
    ProductList.innerHTML = htmlContent;
};

async function fetchIndex(query) {

    await getContent(query)
        .then(items => {
            displayContent(items);
        })
        .catch(
            (error) => {
            console.log(error);
            // display error
            ProductList.innerHTML = `Unable to load product data. Please try again later or contact website administrator.`;}
        )
}

fetchIndex(productsApi);


