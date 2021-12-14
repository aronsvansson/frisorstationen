// ========== GLOBAL VARIABLES ========= 
let _products = [];
const _baseUrl ="https://api.jsonbin.io/b/61b4a31a0ddbee6f8b1b9188";

const _headers = {
    "X-Master-Key":
      "$2b$10$5DEHz9MIE9TIv8IqBuQRju.qGk9/Z0.CioC42q5ZBlEKw/iAcZMq.",
    "Content-Type": "application/json",
  };
  
  // ========== Fetch products from JSONbin ========== 
async function loadProducts() {
  const url = _baseUrl + "/latest";
  const response = await fetch(url, {
    headers: _headers,
  });
  const data = await response.json();
  _products = data;
  console.log(_products);
  appendProducts(_products);
}
loadProducts();

function appendProducts(products) {
    let htmlTemplate = "";
    for (let product of products) {
      htmlTemplate += /*html*/`
        <article class="product-col">
          <a href="#/fourohfour"><img class="productImg" src="${product.imgurl}"></a>
          <h2 class="productName">${product.name}</h2>
          <h3 class="productPrice">${product.price}</h3>
        </article>
      `;
    }
    document.querySelector('#webshop').innerHTML = htmlTemplate;
  }
  