// --- CART LOGIC ---
let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  // update navbar cart count
  document.getElementById("cart-count").innerText = cart.length;

  // update cart total
  document.getElementById("cart-total").innerText = total;

  // add item to cart display
  let cartItems = document.getElementById("cart-items");
  let li = document.createElement("li");
  li.innerText = `${product} - ₹${price} `;

  // --- REMOVE BUTTON ---
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "❌ Remove";
  removeBtn.style.marginLeft = "10px";
  removeBtn.style.color = "red";
  removeBtn.style.cursor = "pointer";

  // remove item when clicked
  removeBtn.onclick = function () {
    cartItems.removeChild(li); // remove from UI
    cart = cart.filter(item => !(item.product === product && item.price === price)); // remove from array
    total -= price;
    document.getElementById("cart-total").innerText = total;
    document.getElementById("cart-count").innerText = cart.length;
  };

  li.appendChild(removeBtn);
  cartItems.appendChild(li);

  alert(`${product} added to cart! ✅`);
}
