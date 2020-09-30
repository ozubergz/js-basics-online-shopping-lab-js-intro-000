var cart = [];

function getCart() {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push( {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1} )
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) return 'Your shopping cart is empty.'

  let result = "In your cart, you have";

  for(let i = 0; i < cart.length; i++) {
    result += `${i === cart.length - 1 && i !== 0 ? ' and' : ''} ${cart[i].itemName} at $${cart[i].itemPrice}${i === cart.length - 1 ? '.' : ','}`
  }

  return result
}

function total() {
  // write your code here
  let totalPrice = 0;
  for(let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
  }

  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  
}

function placeOrder(cardNumber) {
  // write your code here
}
