// ===============================
// CART PAGE - LIBERTY ELECTRONICS
// ===============================

const cartItemsContainer = document.getElementById("cartItemsContainer");
const emptyCartBox = document.getElementById("emptyCartBox");

const subtotalText = document.getElementById("subtotalText");
const deliveryText = document.getElementById("deliveryText");
const taxText = document.getElementById("taxText");
const totalText = document.getElementById("totalText");

const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

// CART DATA
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===============================
// SAVE CART
// ===============================
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ===============================
// CALCULATE TOTAL
// ===============================
function calculateTotals() {
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  let deliveryCharges = subtotal > 200000 ? 0 : (cart.length > 0 ? 500 : 0);
  let tax = Math.round(subtotal * 0.02); // 2% tax
  let total = subtotal + deliveryCharges + tax;

  subtotalText.innerText = "Rs. " + subtotal.toLocaleString();
  deliveryText.innerText = "Rs. " + deliveryCharges.toLocaleString();
  taxText.innerText = "Rs. " + tax.toLocaleString();
  totalText.innerText = "Rs. " + total.toLocaleString();

  localStorage.setItem("cartTotal", total);

  return total;
}

// ===============================
// RENDER CART
// ===============================
function renderCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    emptyCartBox.classList.remove("d-none");
    checkoutBtn.disabled = true;
    clearCartBtn.disabled = true;

    subtotalText.innerText = "Rs. 0";
    deliveryText.innerText = "Rs. 0";
    taxText.innerText = "Rs. 0";
    totalText.innerText = "Rs. 0";

    return;
  }

  emptyCartBox.classList.add("d-none");
  checkoutBtn.disabled = false;
  clearCartBtn.disabled = false;

  cart.forEach((item, index) => {
    cartItemsContainer.innerHTML += `
      <div class="cart-item">

        <img src="${item.img}" alt="${item.name}">

        <div class="flex-grow-1">
          <h6>${item.name}</h6>
          <p>${item.brand || ""} • ${item.color || ""} • ${item.storage || ""}</p>
          <p class="fw-bold text-dark">Rs. ${(item.price).toLocaleString()} PKR</p>

          <div class="qty-box mt-2">
            <button class="qty-btn" onclick="decreaseQty(${index})">-</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="increaseQty(${index})">+</button>
          </div>
        </div>

        <div class="text-end">
          <button class="remove-btn" onclick="removeItem(${index})">
            <i class="fa-solid fa-trash"></i>
          </button>

          <p class="fw-bold mt-4 mb-0">
            Rs. ${(item.price * item.quantity).toLocaleString()}
          </p>
        </div>

      </div>
    `;
  });

  calculateTotals();
}

// ===============================
// INCREASE QTY
// ===============================
function increaseQty(index) {
  cart[index].quantity++;
  saveCart();
  renderCart();
}

// ===============================
// DECREASE QTY
// ===============================
function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

// ===============================
// REMOVE ITEM
// ===============================
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

// ===============================
// CLEAR CART
// ===============================
clearCartBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    saveCart();
    localStorage.removeItem("cartTotal");
    renderCart();
  }
});

// ===============================
// CHECKOUT BUTTON
// ===============================
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty! Add products before checkout.");
    return;
  }

  window.location.href = "/html/payment.html";
});

// ===============================
// INITIAL LOAD
// ===============================
renderCart();