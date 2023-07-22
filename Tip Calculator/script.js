const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = Math.ceil(billValue * (1 + tipValue / 100));
  totalSpan.innerText = totalValue;
}

btnEl.addEventListener("click", calculateTotal);