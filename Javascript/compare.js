const compareContainer = document.getElementById("compareContainer");
const clearCompareBtn = document.getElementById("clearCompareBtn");

function getCompareList() {
  return JSON.parse(localStorage.getItem("compareList")) || [];
}

function saveCompareList(list) {
  localStorage.setItem("compareList", JSON.stringify(list));
}

function removeFromCompare(id) {
  let compareList = getCompareList();
  compareList = compareList.filter(itemId => itemId !== id);
  saveCompareList(compareList);
  renderCompare();
}

function clearCompare() {
  localStorage.removeItem("compareList");
  renderCompare();
}

function renderCompare() {
  const compareList = getCompareList();

  if (compareList.length === 0) {
    compareContainer.innerHTML = `
      <div class="about-box text-center">
        <h4 class="fw-bold">No Products Selected</h4>
        <p class="text-muted mb-0">Go to shop page and select products to compare.</p>
      </div>
    `;
    return;
  }

  // Find selected products
  const selectedProducts = products.filter(p => compareList.includes(p.id));

  // Collect all spec keys
  let specKeys = new Set();
  selectedProducts.forEach(p => {
    Object.keys(p.specs).forEach(key => specKeys.add(key));
  });

  specKeys = Array.from(specKeys);

  // Build table
  let tableHTML = `
    <div class="table-responsive">
      <table class="table table-bordered bg-white align-middle text-center">
        <thead class="table-dark">
          <tr>
            <th>Feature</th>
  `;

  selectedProducts.forEach(product => {
    tableHTML += `
      <th>
        <div class="d-flex flex-column align-items-center gap-2">
          <img src="${product.img}" style="width:90px; height:90px; object-fit:contain;">
          <span class="fw-bold">${product.name}</span>
          <small class="text-light">${product.brand}</small>
          <button class="btn btn-sm btn-danger mt-2" onclick="removeFromCompare(${product.id})">
            Remove
          </button>
        </div>
      </th>
    `;
  });

  tableHTML += `
          </tr>
        </thead>
        <tbody>
  `;

  // Price Row
  tableHTML += `
    <tr>
      <td class="fw-bold">Price</td>
  `;

  selectedProducts.forEach(product => {
    tableHTML += `
      <td class="fw-bold text-success">Rs. ${product.price.toLocaleString()} PKR</td>
    `;
  });

  tableHTML += `</tr>`;

  // Storage Row
  tableHTML += `
    <tr>
      <td class="fw-bold">Storage</td>
  `;

  selectedProducts.forEach(product => {
    tableHTML += `
      <td>${product.storage}GB</td>
    `;
  });

  tableHTML += `</tr>`;

  // Specs rows
  specKeys.forEach(key => {
    tableHTML += `
      <tr>
        <td class="fw-bold">${key}</td>
    `;

    selectedProducts.forEach(product => {
      tableHTML += `
        <td>${product.specs[key] || "-"}</td>
      `;
    });

    tableHTML += `</tr>`;
  });

  tableHTML += `
        </tbody>
      </table>
    </div>
  `;

  compareContainer.innerHTML = tableHTML;
}

// Clear button
clearCompareBtn.addEventListener("click", clearCompare);

// Initial render
renderCompare();