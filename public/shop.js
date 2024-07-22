document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll(".filter");
  const productList = document.querySelectorAll(".items");
  const purchaseModal = new bootstrap.Modal(
    document.getElementById("purchaseModal")
  );
  const confirmationModal = new bootstrap.Modal(
    document.getElementById("confirmationModal")
  );
  const contactConfirmationModal = new bootstrap.Modal(
    document.getElementById("contactConfirmationModal")
  );
  const purchaseList = document.getElementById("purchase-list");

  let confirmedPurchases = [];

  // Filter functionality
  filters.forEach((filter) => {
    filter.addEventListener("change", function () {
      applyFilters();
    });
  });

  function applyFilters() {
    const activeFilters = getActiveFilters();
    productList.forEach((product) => {
      const matches = matchesFilters(product, activeFilters);
      product.style.display = matches ? "block" : "none";
    });
  }

  function getActiveFilters() {
    const activeFilters = {};
    filters.forEach((filter) => {
      if (filter.checked) {
        const filterType = filter.getAttribute("data-filter");
        if (!activeFilters[filterType]) {
          activeFilters[filterType] = [];
        }
        activeFilters[filterType].push(filter.value);
      }
    });
    return activeFilters;
  }

  function matchesFilters(product, filters) {
    for (const filterType in filters) {
      const filterValues = filters[filterType];
      const productValue = product.getAttribute(`data-${filterType}`);
      if (!filterValues.includes(productValue)) {
        return false;
      }
    }
    return true;
  }

  // Purchase functionality
  const buyNowButtons = document.querySelectorAll(".buy");

  buyNowButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productName = this.getAttribute("data-product");
      const productOrigin = this.getAttribute("data-origin");
      document.getElementById("productName").value = productName;
      document.getElementById("productPrice").value = `$${productPrice}`;
      purchaseModal.show();
    });
  });

  const purchaseForm = document.getElementById("purchaseForm");

  purchaseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    document.getElementById("confirmProductName").innerText = productName;
    document.getElementById("confirmProductPrice").innerText = productPrice;
    purchaseModal.hide();
    confirmationModal.show();

    // Store and display confirmed purchase
    const purchase = { name: productName, price: productPrice };
    confirmedPurchases.push(purchase);
    updatePurchaseList();
  });

  function updatePurchaseList() {
    purchaseList.innerHTML = "";
    confirmedPurchases.forEach((purchase) => {
      const li = document.createElement("li");
      li.textContent = `${purchase.name} - ${purchase.price}`;
      purchaseList.appendChild(li);
    });
  }

  // Contact form functionality
  const contactForm = document.querySelector(".contact-form form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    contactConfirmationModal.show();
    contactForm.reset(); // Clear the form fields
  });
});
