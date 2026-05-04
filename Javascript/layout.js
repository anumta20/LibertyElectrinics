// ===============================
// LAYOUT.JS - HEADER + FOOTER LOADER
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
  updateCartCount();
});


// ===============================
// HEADER LOAD
// ===============================
function loadHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  fetch("/html/header.html")
    .then(res => res.text())
    .then(data => {
      header.innerHTML = data;
      updateCartCount();
      setupSearchBar();
    })
    .catch(err => console.log("Header load error:", err));
}


// ===============================
// FOOTER LOAD
// ===============================
function loadFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  fetch("/html/footer.html")
    .then(res => res.text())
    .then(data => {
      footer.innerHTML = data;
    })
    .catch(err => console.log("Footer load error:", err));
}


// ===============================
// CART COUNT UPDATE
// ===============================
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalQty = 0;
  cart.forEach(item => totalQty += item.quantity);

  cartCount.innerText = totalQty;
}


// ===============================
// SEARCH BAR FUNCTION
// ===============================
function setupSearchBar() {
  const searchInput = document.getElementById("navSearchInput");
  const searchBtn = document.getElementById("navSearchBtn");

  if (!searchInput || !searchBtn) return;

  searchBtn.addEventListener("click", () => {
    const value = searchInput.value.trim();

    if (value.length > 0) {
      window.location.href = `/html/shop.html?search=${encodeURIComponent(value)}`;
    }
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });
}