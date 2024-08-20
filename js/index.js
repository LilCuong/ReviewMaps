
const basePrice = 22000;
const priceDisplay = document.getElementById('priceDisplay');
const numberInput = document.getElementById('numberInput');

function updatePrice() {
    const quantity = parseInt(numberInput.value, 10) || 1;
    const totalPrice = basePrice * quantity;
    priceDisplay.textContent = totalPrice.toLocaleString('vn-VN') + ' VND';

}

numberInput.addEventListener('input', updatePrice);

updatePrice();

