// Show alert on page load
window.onload = function () {
  alert("Hello TEJ!");

  // Set default price for both Samosa and Tea
  document.querySelector("#samosa input[type='number']").value = 50;
  document.querySelector("#Tea input[type='number']").value = 25;
};

// Quantity variables
let samosaQty = 0;
let teaQty = 0;

// Get DOM elements
const samosaQtyDisplay = document.getElementById("quantity-samosa");
const teaQtyDisplay = document.getElementById("quantity-tea");

const samosaPlusBtn = document.querySelector("#samosa button:first-of-type");
const samosaMinusBtn = document.querySelector("#samosa button:last-of-type");

const teaPlusBtn = document.querySelector("#Tea button:first-of-type");
const teaMinusBtn = document.querySelector("#Tea button:last-of-type");

// Update quantity display
function updateQuantities() {
  samosaQtyDisplay.textContent = samosaQty;
  teaQtyDisplay.textContent = teaQty;
}

// Handle quantity buttons
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

// Handle "Calculate grand total" button
document.querySelector("button").addEventListener("click", () => {
  const samosaPrice = Number(document.querySelector("#samosa input").value);
  const teaPrice = Number(document.querySelector("#Tea input").value);

  const samosaTotal = samosaPrice * samosaQty;
  const teaTotal = teaPrice * teaQty;

  // Set Total for Samosa and Tea
  document.getElementById("samosa-total").textContent = `Total: ${samosaTotal}`;
  document.getElementById("tea-total").textContent = `Total: ${teaTotal}`;

  const totalPrice = samosaTotal + teaTotal;
  const vat = totalPrice * 0.13;
  const tip = totalPrice * 0.10;
  const grandTotal = totalPrice + vat + tip;

  // Update total fields
  document.getElementById("total-price").textContent = `Total price: ${totalPrice}`;
  document.getElementById("vat-total").textContent = vat.toFixed(2);
  document.getElementById("tip-total").textContent = tip.toFixed(2);
  document.getElementById("grand-total-label").textContent = `Grand Total: ${grandTotal.toFixed(2)}`;
});
