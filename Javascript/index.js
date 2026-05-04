// =======================
// PRODUCTS DATA
// =======================
const products = [
    // Samsung
    { id: 1, brand: "Samsung", name: "Samsung Galaxy S24 Ultra", price: 389999, storage: 512, date: "2026-01-10", img: "images/shop/s24ultra.png" },
    { id: 2, brand: "Samsung", name: "Samsung Galaxy S23 Ultra", price: 309999, storage: 256, date: "2025-06-15", img: "images/shop/s23ultra.png" },
    { id: 3, brand: "Samsung", name: "Samsung Galaxy Z Flip 5", price: 299999, storage: 256, date: "2025-12-01", img: "images/shop/zflip5.png" },
    { id: 4, brand: "Samsung", name: "Samsung Galaxy Z Fold 5", price: 499999, storage: 512, date: "2025-11-20", img: "images/shop/zfold5.png" },
    { id: 5, brand: "Samsung", name: "Samsung Galaxy A55", price: 139999, storage: 256, date: "2026-02-01", img: "images/shop/a55.png" },
  
    // Apple
    { id: 6, brand: "Apple", name: "Apple iPhone 15 Pro Max", price: 459999, storage: 256, date: "2026-01-05", img: "images/shop/iphone15.png" },
    { id: 7, brand: "Apple", name: "Apple iPhone 15 Pro", price: 429999, storage: 256, date: "2025-12-15", img: "images/shop/iphone15pro.png" },
    { id: 8, brand: "Apple", name: "Apple iPhone 14 Pro Max", price: 369999, storage: 256, date: "2025-06-25", img: "images/shop/iphone14.png" },
    { id: 9, brand: "Apple", name: "Apple iPhone 13", price: 249999, storage: 128, date: "2025-02-10", img: "images/shop/iphone13.png" },
    { id: 10, brand: "Apple", name: "Apple iPhone SE 2022", price: 159999, storage: 128, date: "2024-10-01", img: "images/shop/iphonese.png" },
  
    // Google Pixel
    { id: 11, brand: "Google", name: "Google Pixel 8 Pro", price: 289999, storage: 256, date: "2026-01-20", img: "images/shop/pixel8.png" },
    { id: 12, brand: "Google", name: "Google Pixel 8", price: 239999, storage: 128, date: "2025-12-05", img: "images/shop/pixel8normal.png" },
    { id: 13, brand: "Google", name: "Google Pixel 7 Pro", price: 199999, storage: 128, date: "2025-04-15", img: "images/shop/pixel7pro.png" },
    { id: 14, brand: "Google", name: "Google Pixel 7", price: 169999, storage: 128, date: "2025-03-01", img: "images/shop/pixel7.png" },
    { id: 15, brand: "Google", name: "Google Pixel 6 Pro", price: 139999, storage: 128, date: "2024-11-11", img: "images/shop/pixel6pro.png" },
  
    // Oppo
    { id: 16, brand: "Oppo", name: "Oppo Reno 11", price: 129999, storage: 256, date: "2026-02-20", img: "images/shop/opporeno11.png" },
    { id: 17, brand: "Oppo", name: "Oppo Reno 10", price: 109999, storage: 256, date: "2025-08-10", img: "images/shop/opporeno10.png" },
    { id: 18, brand: "Oppo", name: "Oppo A78", price: 69999, storage: 128, date: "2025-01-15", img: "images/shop/oppoa78.png" },
    { id: 19, brand: "Oppo", name: "Oppo A58", price: 59999, storage: 128, date: "2024-12-25", img: "images/shop/oppoa58.png" },
    { id: 20, brand: "Oppo", name: "Oppo Find X5", price: 249999, storage: 256, date: "2025-05-10", img: "images/shop/oppofindx5.png" },
  
    // Realme
    { id: 21, brand: "Realme", name: "Realme 11 Pro", price: 89999, storage: 256, date: "2025-09-01", img: "images/shop/realme11pro.png" },
    { id: 22, brand: "Realme", name: "Realme Narzo 60", price: 74999, storage: 128, date: "2025-07-10", img: "images/shop/narzo60.png" },
    { id: 23, brand: "Realme", name: "Realme C55", price: 45999, storage: 128, date: "2025-02-20", img: "images/shop/realmec55.png" },
    { id: 24, brand: "Realme", name: "Realme GT Neo", price: 159999, storage: 256, date: "2025-04-05", img: "images/shop/realmegtneo.png" },
    { id: 25, brand: "Realme", name: "Realme 10", price: 59999, storage: 128, date: "2024-10-20", img: "images/shop/realme10.png" },
  
    // Xiaomi
    { id: 26, brand: "Xiaomi", name: "Xiaomi Redmi Note 13", price: 64999, storage: 128, date: "2026-03-01", img: "images/shop/redminote13.png" },
    { id: 27, brand: "Xiaomi", name: "Xiaomi Redmi Note 12", price: 59999, storage: 128, date: "2025-06-12", img: "images/shop/redminote12.png" },
    { id: 28, brand: "Xiaomi", name: "Xiaomi Poco X5 Pro", price: 99999, storage: 256, date: "2025-08-15", img: "images/shop/pocox5.png" },
    { id: 29, brand: "Xiaomi", name: "Xiaomi Poco F5", price: 139999, storage: 256, date: "2025-09-20", img: "images/shop/pocof5.png" },
    { id: 30, brand: "Xiaomi", name: "Xiaomi 13T Pro", price: 219999, storage: 512, date: "2025-11-01", img: "images/shop/xiaomi13t.png" },
  ];
  
  // =======================
  // SETTINGS
  // =======================
  const itemsPerPage = 6;
  let currentPage = 1;
  let filteredProducts = [...products];
  
  // =======================
  // SELECTORS
  // =======================
  const productGrid = document.getElementById("productGrid");
  const productCount = document.getElementById("productCount");
  const pagination = document.getElementById("pagination");
  const sortSelect = document.getElementById("sortSelect");
  
  // =======================
  // RENDER PRODUCTS
  // =======================
  function renderProducts() {
    productGrid.innerHTML = "";
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToShow = filteredProducts.slice(start, end);
  
    productCount.innerHTML = `Showing <b>${filteredProducts.length}</b> products`;
  
    if (productsToShow.length === 0) {
      productGrid.innerHTML = `<p class="text-center text-muted">No products found.</p>`;
      pagination.innerHTML = "";
      return;
    }
  
    productsToShow.forEach((product) => {
      productGrid.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card product-card h-100">
            <div class="product-img-box">
              <img src="${product.img}" class="product-img" alt="${product.name}">
              <button class="quick-view" onclick="alert('Quick View: ${product.name}')">Quick View</button>
            </div>
  
            <div class="card-body text-center">
              <h6 class="fw-bold">${product.name}</h6>
              <p class="text-muted small mb-1">Storage: ${product.storage}GB</p>
              <p class="text-muted small mb-2">From Rs. ${product.price.toLocaleString()} PKR</p>
              <button class="btn btn-outline-dark w-100" onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    });
  
    renderPagination();
  }
  
  // =======================
  // PAGINATION
  // =======================
  function renderPagination() {
    pagination.innerHTML = "";
  
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
    for (let i = 1; i <= totalPages; i++) {
      pagination.innerHTML += `
        <li class="page-item ${i === currentPage ? "active" : ""}">
          <a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>
        </li>
      `;
    }
  }
  
  function goToPage(page) {
    currentPage = page;
    renderProducts();
  }
  
  // =======================
  // FILTER LOGIC
  // =======================
  function applyFilters() {
    const selectedBrands = Array.from(document.querySelectorAll(".brand-check:checked")).map(cb => cb.value);
    const selectedStorage = Array.from(document.querySelectorAll(".storage-check:checked")).map(cb => parseInt(cb.value));
  
    const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice").value) || Infinity;
  
    filteredProducts = products.filter(product => {
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const storageMatch = selectedStorage.length === 0 || selectedStorage.includes(product.storage);
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;
  
      return brandMatch && storageMatch && priceMatch;
    });
  
    applySorting();
    currentPage = 1;
    renderProducts();
  }
  
  // =======================
  // SORTING LOGIC
  // =======================
  function applySorting() {
    const sortValue = sortSelect.value;
  
    if (sortValue === "lowhigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } 
    else if (sortValue === "highlow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } 
    else if (sortValue === "newest") {
      filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }
  
  // =======================
  // EVENTS
  // =======================
  document.querySelectorAll(".brand-check").forEach(cb => cb.addEventListener("change", applyFilters));
  document.querySelectorAll(".storage-check").forEach(cb => cb.addEventListener("change", applyFilters));
  
  document.getElementById("applyPrice").addEventListener("click", applyFilters);
  
  sortSelect.addEventListener("change", () => {
    applySorting();
    renderProducts();
  });
  
  // Reset Filters
  document.getElementById("resetFilters").addEventListener("click", () => {
    document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";
  
    filteredProducts = [...products];
    currentPage = 1;
    renderProducts();
  });
  
  // =======================
  // CART (DEMO)
  // =======================
  function addToCart(productName) {
    alert(productName + " added to cart!");
  }
  
  // =======================
  // INITIAL LOAD
  // =======================
  renderProducts();