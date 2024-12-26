export const cart = [];

export function addToCart(productId) {
  let productAlreadyInCart;
    
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      productAlreadyInCart = cartItem;
    }
  });

  if (productAlreadyInCart) {
    productAlreadyInCart.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1  
    });
  }
}