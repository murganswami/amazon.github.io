// Sample product data
const products = [
    { name: "Product 1", price: "$19.99", image: "product1.jpg" },
    { name: "Product 2", price: "$29.99", image: "product2.jpg" },
    { name: "Product 3", price: "$39.99", image: "product3.jpg" }
];

const productList = document.getElementById("product-list");

// Function to generate product listings
function renderProducts(products) {
    productList.innerHTML = "";
    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
            </div>
        `;
        productList.innerHTML += productHTML;
    });
}

// Initial rendering of products
renderProducts(products);

// You can add more functionality here, such as search filtering, fetching products from a server, etc.
