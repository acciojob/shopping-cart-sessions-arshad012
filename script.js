// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];


// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}


// Render cart list
function renderCart() {
	const cartItem = JSON.parse(sessionStorage.getItem('shopping-cart'));
	if(cartItem) {
		cartItem.forEach((product) => {
	    const li = document.createElement("li");
	    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="removeFromCart(${product.id})">Add to Cart</button>`;
		cartList.appendChild(li);
	  });
	}
}


// Add item to cart
let shopping_cart = JSON.parse(sessionStorage.getItem('shopping-cart')) || [];

function addToCart(productId) {
	for(let el of products) {
		if(el.id == productId) {
			shopping_cart.push(el);
			sessionStorage.setItem('shopping-cart', JSON.stringify(shopping_cart));
			break;
		}
	}
}


// Remove item from cart
function removeFromCart(productId) {
	let shopping_cart = JSON.parse(sessionStorage.getItem('shopping-cart'));
	for(let i=0; i<shopping_cart.length; i++) {
		if(shopping_cart[i].id == productId) {
			shopping_cart.splice(i, 1);
			break;
		}
	}
	sessionStorage.setItem('shopping-cart', JSON.stringify(shopping_cart));
}

// Clear cart
function clearCart() {
	sessionStorage.removeItem("shopping-cart");
	location.reload();
}


// Initial render

renderProducts();
renderCart();


