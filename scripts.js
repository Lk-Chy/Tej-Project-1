// Show alert on page load
window.onload = function () {
  alert("Hello TEJ!");

  // Set default price for both Samosa and Tea
  document.getElementById("samosa-price").value = 50;
  document.getElementById("tea-price").value = 25;

  updateItemTotals(); // Initial load of totals
};

// Quantity variables
let samosaQty = 0;
let teaQty = 0;

// Get DOM elements
const samosaQtyDisplay = document.getElementById("quantity-samosa");
const teaQtyDisplay = document.getElementById("quantity-tea");

const samosaPlusBtn = document.getElementById("samosa-plus");
const samosaMinusBtn = document.getElementById("samosa-minus");

const teaPlusBtn = document.getElementById("tea-plus");
const teaMinusBtn = document.getElementById("tea-minus");

// Update quantity display
function updateQuantities() {
  samosaQtyDisplay.textContent = samosaQty;
  teaQtyDisplay.textContent = teaQty;
  updateItemTotals(); // Only update item totals
}

// Update item-only totals (no VAT/tip)
function updateItemTotals() {
  const samosaPrice = Number(document.getElementById("samosa-price").value);
  const teaPrice = Number(document.getElementById("tea-price").value);

  const samosaTotal = samosaPrice * samosaQty;
  const teaTotal = teaPrice * teaQty;

  document.getElementById("samosa-total").textContent = `Total: ${samosaTotal}`;
  document.getElementById("tea-total").textContent = `Total: ${teaTotal}`;

  // Update only the plain total price (excluding VAT and tip)
  const totalPrice = samosaTotal + teaTotal;
  document.getElementById("total-price").textContent = `Total price: ${totalPrice}`;
}

// Button click listeners
samosaPlusBtn.addEventListener("click", () => {
  samosaQty++;
  updateQuantities();
});

samosaMinusBtn.addEventListener("click", () => {
  if (samosaQty > 0) samosaQty--;
  updateQuantities();
});

teaPlusBtn.addEventListener("click", () => {
  teaQty++;
  updateQuantities();
});

teaMinusBtn.addEventListener("click", () => {
  if (teaQty > 0) teaQty--;
  updateQuantities();
});

// Calculate Grand Total with VAT and Tip
document.getElementById("calculate-button").addEventListener("click", () => {
  const samosaPrice = Number(document.getElementById("samosa-price").value);
  const teaPrice = Number(document.getElementById("tea-price").value);

  const samosaTotal = samosaPrice * samosaQty;
  const teaTotal = teaPrice * teaQty;

  const totalPrice = samosaTotal + teaTotal;
  const vat = totalPrice * 0.13;
  const tip = totalPrice * 0.10;
  const grandTotal = totalPrice + vat + tip;

  document.getElementById("vat-total").textContent = vat.toFixed(2);
  document.getElementById("tip-total").textContent = tip.toFixed(2);
  document.getElementById("grand-total-label").textContent = `Grand Total: ${grandTotal.toFixed(2)}`;
});
