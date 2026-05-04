const cardPay = document.getElementById("cardPay");
const cashPay = document.getElementById("cashPay");

const cardForm = document.getElementById("cardForm");
const payBtn = document.getElementById("payBtn");

const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const expiry = document.getElementById("expiry");
const cvv = document.getElementById("cvv");

// SUMMARY ELEMENT (MAKE SURE THIS EXISTS IN payment.html)
const totalText = document.getElementById("totalText");

// CART DATA
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// REGEX
const cardNumberRegex = /^[0-9]{16}$/;
const expiryRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
const cvvRegex = /^[0-9]{3}$/;

// ===============================
// CALCULATE TOTAL FROM CART
// ===============================
function calculateCartTotal() {
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  let delivery = subtotal > 200000 ? 0 : 500;
  let tax = Math.round(subtotal * 0.02);

  let total = subtotal + delivery + tax;

  localStorage.setItem("cartTotal", total);

  return total;
}

// ===============================
// SHOW TOTAL ON PAGE
// ===============================
function showTotal() {
  if (!totalText) return;

  if (cart.length === 0) {
    totalText.innerText = "0";
    return;
  }

  let total = calculateCartTotal();
  totalText.innerText = total.toLocaleString();
}

showTotal();

// ===============================
// TOGGLE PAYMENT METHOD
// ===============================
function togglePayment() {
  if (cashPay.checked) {
    cardForm.style.display = "none";
  } else {
    cardForm.style.display = "block";
  }
}

cardPay.addEventListener("change", togglePayment);
cashPay.addEventListener("change", togglePayment);

togglePayment();

// ===============================
// PAYMENT BUTTON
// ===============================
payBtn.addEventListener("click", () => {
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("❌ Your cart is empty!");
    window.location.href = "/html/cart.html";
    return;
  }

  let cartTotal = calculateCartTotal();

  // CASH ON DELIVERY
  if (cashPay.checked) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
      orderId: "ORD" + Math.floor(Math.random() * 999999),
      items: cart,
      total: cartTotal,
      paymentMethod: "Cash on Delivery",
      date: new Date().toLocaleString()
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("✅ Order placed successfully! (Cash on Delivery)");

    localStorage.removeItem("cart");
    localStorage.removeItem("cartTotal");

    window.location.href = "/html/index.html";
    return;
  }

  // CARD PAYMENT VALIDATION
  if (cardName.value.trim().length < 3) {
    alert("❌ Enter valid card holder name!");
    return;
  }

  if (!cardNumberRegex.test(cardNumber.value.trim())) {
    alert("❌ Card number must be 16 digits!");
    return;
  }

  if (!expiryRegex.test(expiry.value.trim())) {
    alert("❌ Expiry must be in MM/YY format!");
    return;
  }

  if (!cvvRegex.test(cvv.value.trim())) {
    alert("❌ CVV must be 3 digits!");
    return;
  }

  // SAVE ORDER
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    orderId: "ORD" + Math.floor(Math.random() * 999999),
    items: cart,
    total: cartTotal,
    paymentMethod: "Card Payment",
    date: new Date().toLocaleString()
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  alert("✅ Payment Successful! Order Confirmed!");

  localStorage.removeItem("cart");
  localStorage.removeItem("cartTotal");

  window.location.href = "/html/index.html";
});