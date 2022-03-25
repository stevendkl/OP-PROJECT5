// API URL
const server = 'http://localhost:3000/';
const productsApi = `${server}api/products/`;
const productsApiOrder = `${productsApi}order`

async function getContent(query) {
    const response = await fetch(query);
    const data = await response.json();
    return data;
}




