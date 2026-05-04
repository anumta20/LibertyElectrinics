// ===============================
// LIBERTY ELECTRONICS - SHOP.JS (FINAL WORKING)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // Safety check
  if (typeof products === "undefined") {
    console.error("❌ products array is not loaded. Check products.js path.");
    alert("Products are not loading! Check /Javascript/products.js path.");
    return;
  }

  // ===============================
  // ELEMENTS
  // ===============================
  const productsContainer = document.getElementById("productsContainer");
  const productCountText = document.getElementById("productCountText");

  const brandFilter = document.getElementById("brandFilter");
  const priceFilter = document.getElementById("priceFilter");
  const storageFilter = document.getElementById("storageFilter");
  const sortFilter = document.getElementById("sortFilter");
  const searchFilter = document.getElementById("searchFilter");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");

  // Brand Intro
  const brandIntroBox = document.getElementById("brandIntroBox");
  const brandIntroTitle = document.getElementById("brandIntroTitle");
  const brandIntroText = document.getElementById("brandIntroText");

  // Compare
  const compareFloatingBtn = document.getElementById("compareFloatingBtn");
  const compareCount = document.getElementById("compareCount");

  let compareList = JSON.parse(localStorage.getItem("compareList")) || [];

  // ===============================
  // BRAND INTRO DATA
  // ===============================
  const brandIntroData = {
    Samsung:
      "Samsung phones are famous for their powerful cameras, AMOLED displays and premium flagship models like Galaxy S and Z series.",
    Apple:
      "Apple iPhones provide smooth performance, premium design and long-term software updates with iOS.",
    Google:
      "Google Pixel phones are best known for AI camera features, clean Android experience and fast software updates.",
    Oppo:
      "Oppo phones focus on stylish design, fast charging and strong camera technology for everyday users.",
    Realme:
      "Realme phones offer strong performance in budget and mid-range categories with gaming-friendly specs.",
    Xiaomi:
      "Xiaomi provides flagship killer devices with powerful specs, fast charging and great pricing."
  };

  // ===============================
  // UPDATE COMPARE UI
  // ===============================
  function updateCompareUI() {
    compareCount.innerText = compareList.length;

    if (compareList.length >= 2) {
      compareFloatingBtn.style.display = "block";
    } else {
      compareFloatingBtn.style.display = "none";
    }

    localStorage.setItem("compareList", JSON.stringify(compareList));
  }

  // ===============================
  // APPLY FILTERS
  // ===============================
  function applyFilters() {
    const selectedBrand = brandFilter.value;
    const maxPrice = priceFilter.value ? parseInt(priceFilter.value) : Infinity;
    const selectedStorage = storageFilter.value;
    const searchText = searchFilter.value.trim().toLowerCase();

    let filtered = products.filter((product) => {

      // BRAND FILTER
      const brandMatch =
        selectedBrand === "All" || product.brand === selectedBrand;

      // PRICE FILTER
      const priceMatch = product.price <= maxPrice;

      // STORAGE FILTER (FIXED)
      let storageMatch = true;

      if (selectedStorage !== "All") {
        const storageNum = parseInt(selectedStorage);

        storageMatch =
          product.storage === storageNum ||
          (product.storageOptions &&
            product.storageOptions.some(opt => parseInt(opt) === storageNum));
      }

      // SEARCH FILTER
      const searchMatch =
        product.name.toLowerCase().includes(searchText) ||
        product.brand.toLowerCase().includes(searchText);

      return brandMatch && priceMatch && storageMatch && searchMatch;
    });

    // SORTING
    const sortValue = sortFilter.value;

    if (sortValue === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === "newest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    // BRAND INTRO
    if (selectedBrand !== "All") {
      brandIntroBox.classList.remove("d-none");
      brandIntroTitle.innerText = selectedBrand;
      brandIntroText.innerText = brandIntroData[selectedBrand] || "";
    } else {
      brandIntroBox.classList.add("d-none");
    }

    renderProducts(filtered);
  }

  // ===============================
  // RENDER PRODUCTS
  // ===============================
  function renderProducts(list) {
    productsContainer.innerHTML = "";

    productCountText.innerHTML = `Showing <b>${list.length}</b> products`;

    if (list.length === 0) {
      productsContainer.innerHTML = `
        <div class="col-12">
          <p class="text-center text-muted fw-semibold mt-4">
            No products found.
          </p>
        </div>
      `;
      return;
    }

    list.forEach((product) => {
      const checked = compareList.includes(product.id) ? "checked" : "";

      productsContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card product-card h-100">

            <div class="compare-check">
              <input type="checkbox" class="compareCheckbox" value="${product.id}" ${checked}>
              Compare
            </div>

            <a href="/html/product.html?id=${product.id}" class="text-decoration-none text-dark">

              <div class="product-img-box">
                <img src="${product.img}" class="product-img" alt="${product.name}">
              </div>

              <div class="card-body text-center">
                <h6 class="fw-bold">${product.name}</h6>
                <p class="text-muted small mb-1">${product.brand} | ${product.storage}GB</p>

                <p class="fw-bold mb-3">
                  Rs. ${product.price.toLocaleString()} PKR
                </p>

                <div class="btn btn-dark w-100">
                  View Details
                </div>
              </div>

            </a>

          </div>
        </div>
      `;
    });

    setupCompareCheckboxEvents();
  }

  // ===============================
  // COMPARE CHECKBOX EVENTS
  // ===============================
  function setupCompareCheckboxEvents() {
    document.querySelectorAll(".compareCheckbox").forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const id = parseInt(this.value);

        if (this.checked) {
          if (compareList.length >= 3) {
            alert("You can compare maximum 3 products!");
            this.checked = false;
            return;
          }

          if (!compareList.includes(id)) {
            compareList.push(id);
          }
        } else {
          compareList = compareList.filter((pid) => pid !== id);
        }

        updateCompareUI();
      });
    });
  }

  // ===============================
  // COMPARE BUTTON CLICK
  // ===============================
  compareFloatingBtn.addEventListener("click", () => {
    if (compareList.length < 2) {
      alert("Please select at least 2 products to compare.");
      return;
    }

    window.location.href = `/html/compare.html`;
  });

  // ===============================
  // RESET FILTERS
  // ===============================
  resetFiltersBtn.addEventListener("click", () => {
    brandFilter.value = "All";
    priceFilter.value = "";
    storageFilter.value = "All";
    sortFilter.value = "featured";
    searchFilter.value = "";

    applyFilters();
  });

  // ===============================
  // EVENT LISTENERS
  // ===============================
  brandFilter.addEventListener("change", applyFilters);
  priceFilter.addEventListener("input", applyFilters);
  storageFilter.addEventListener("change", applyFilters);
  sortFilter.addEventListener("change", applyFilters);
  searchFilter.addEventListener("input", applyFilters);

  // ===============================
  // READ URL PARAMS (brand / search from homepage links)
  // ===============================
  const urlParams = new URLSearchParams(window.location.search);
  const urlBrand = urlParams.get("brand");
  const urlSearch = urlParams.get("search");

  if (urlBrand) {
    const options = Array.from(brandFilter.options).map(o => o.value);
    const match = options.find(o => o.toLowerCase() === urlBrand.toLowerCase());
    if (match) brandFilter.value = match;
  }

  if (urlSearch) {
    searchFilter.value = urlSearch;
  }

  // ===============================
  // INITIAL LOAD
  // ===============================
  applyFilters();
  updateCompareUI();

});