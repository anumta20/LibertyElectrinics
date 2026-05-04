function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.innerText = totalItems;
  }
}

updateCartCount();