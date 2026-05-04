// ===============================
// LIBERTY ELECTRONICS - PRODUCT.JS (FINAL FIXED)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // Check products array loaded
  if (typeof products === "undefined") {
    console.error("❌ products array is not loaded. Check products.js path.");
    alert("Products not loaded! Fix products.js script path.");
    return;
  }

  // Get product id from URL
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));

  // Find product
  const product = products.find(p => p.id === productId);

  // Elements
  const productImg = document.getElementById("productImg");
  const productName = document.getElementById("productName");
  const productBrand = document.getElementById("productBrand");
  const productPrice = document.getElementById("productPrice");
  const storageSelect = document.getElementById("storageSelect");
  const colorBox = document.getElementById("colorBox");
  const specsTable = document.getElementById("specsTable");
  const addToCartBtn = document.getElementById("addToCartBtn");
  const addedPopup = document.getElementById("addedPopup");
  const manualDownloadBtn = document.getElementById("manualDownloadBtn");

  let selectedColor = "";
  let selectedStorage = "";

  // ===============================
  // STORAGE PRICE SYSTEM
  // ===============================
  function calculateStoragePrice(basePrice, storage) {
    if (storage === "128GB") return basePrice;
    if (storage === "256GB") return basePrice + 15000;
    if (storage === "512GB") return basePrice + 30000;
    if (storage === "1TB") return basePrice + 50000;
    return basePrice;
  }

  // ===============================
  // UPDATE PRICE UI
  // ===============================
  function updatePrice() {
    let updatedPrice = calculateStoragePrice(product.price, selectedStorage);
    productPrice.innerText = updatedPrice.toLocaleString();
  }

  // ===============================
  // LOAD PRODUCT
  // ===============================
  function loadProduct() {
    if (!product) {
      document.body.innerHTML = `
        <div class="container text-center py-5">
          <h2 class="fw-bold">Product Not Found</h2>
          <p class="text-muted">This product does not exist.</p>
          <a href="/html/shop.html" class="btn btn-dark px-4">Back to Shop</a>
        </div>
      `;
      return;
    }

    // Basic info
    productName.innerText = product.name;
    productBrand.innerText = product.brand;

    // Default values
    selectedColor = product.colors?.[0] || "";
    selectedStorage = product.storageOptions?.[0] || "128GB";

    // Default image
    if (product.colorImages && selectedColor) {
      productImg.src = product.colorImages[selectedColor];
    } else {
      productImg.src = product.img;
    }

    // Load price
    updatePrice();

    // ===============================
    // STORAGE OPTIONS
    // ===============================
    storageSelect.innerHTML = "";

    if (product.storageOptions && product.storageOptions.length > 0) {
      product.storageOptions.forEach(storage => {
        let option = document.createElement("option");
        option.value = storage;
        option.innerText = storage;
        storageSelect.appendChild(option);
      });

      storageSelect.value = selectedStorage;

      storageSelect.addEventListener("change", () => {
        selectedStorage = storageSelect.value;
        updatePrice();
      });
    }

    // ===============================
    // COLORS
    // ===============================
    colorBox.innerHTML = "";

    if (product.colors && product.colors.length > 0) {
      product.colors.forEach((color, index) => {
        let btn = document.createElement("button");
        btn.className = "color-btn";
        btn.innerText = color;

        if (index === 0) btn.classList.add("active");

        btn.addEventListener("click", () => {
          document.querySelectorAll(".color-btn").forEach(b => {
            b.classList.remove("active");
          });

          btn.classList.add("active");
          selectedColor = color;

          // Update image
          if (product.colorImages && product.colorImages[selectedColor]) {
            productImg.src = product.colorImages[selectedColor];
          }
        });

        colorBox.appendChild(btn);
      });
    }

    // ===============================
    // SPECS TABLE
    // ===============================
    specsTable.innerHTML = "";

    if (product.specs) {
      for (let key in product.specs) {
        specsTable.innerHTML += `
          <tr>
            <th>${key}</th>
            <td>${product.specs[key]}</td>
          </tr>
        `;
      }
    }

    // ===============================
    // MANUAL DOWNLOAD
    // ===============================
    if (manualDownloadBtn) {
      manualDownloadBtn.href = product.manualPDF || "/manuals/manual.pdf";
      manualDownloadBtn.setAttribute("download", "");
    }
  }

  // ===============================
  // ADD TO CART
  // ===============================
  addToCartBtn.addEventListener("click", () => {

    if (!product) {
      alert("Product not found.");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let finalPrice = calculateStoragePrice(product.price, selectedStorage);

    let cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      img: product.colorImages?.[selectedColor] || product.img,
      color: selectedColor,
      storage: selectedStorage,
      price: finalPrice,
      quantity: 1
    };

    // check if already exists
    let existingIndex = cart.findIndex(item =>
      item.id === cartItem.id &&
      item.color === cartItem.color &&
      item.storage === cartItem.storage
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Popup animation
    if (addedPopup) {
      addedPopup.style.display = "block";
      setTimeout(() => {
        addedPopup.style.display = "none";
      }, 2000);
    }

    // Update cart badge
    if (typeof updateCartCount === "function") {
      updateCartCount();
    }
  });

  // ===============================
  // RUN
  // ===============================
  loadProduct();

});