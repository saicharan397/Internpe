let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}
function updateCart() {
  const cartList = document.getElementById('cart');
  const totalElement = document.getElementById('total');
  let total = 0;
  cartList.innerHTML = '';
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
    total += item.price;
  });
  totalElement.textContent = `$${total.toFixed(2)}`;
}

function checkout() {
  alert('Thank you for your purchase!');
  cart = [];
  updateCart();
}
