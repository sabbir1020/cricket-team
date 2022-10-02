function setValue(elementId, value) {
  const amount = document.getElementById(elementId, value);
  amount.innerText = value;
}
function multValue(perAmount, playerTotal) {
  const totalValue = perAmount * playerTotal;

  return totalValue;
}
