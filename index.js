function calculateTotalPrice(quantity = 1, price = 10) {
  let result = quantity * price;
  return result.toLocaleString("ru-RU");
}
const calculate = () => {
  const quantityInput = document.getElementById("quantity");
  const priceInput = document.getElementById("price");
  const quantity = Number(quantityInput.value);
  const price = Number(priceInput.value);
  const totalPrice = calculateTotalPrice(quantity, price);
  alert(`Стоимость покупки: ${totalPrice} рублей`);
};
