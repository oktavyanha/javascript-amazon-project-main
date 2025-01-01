function Cart(localStorageKey){
  const cart = {
    cartItems: undefined,
  
    loadFromStorage(){ // this.cartItems is the same as cart.cartItems 
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [{ // || is a logical OR operator
          productId :"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionId: '1',
        }, {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: '2',
        }
      ];
    },
  
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
  
    addToCart(productId) {
      let productAlreadyInCart;
        
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          productAlreadyInCart = cartItem;
        }
      });
    
      if (productAlreadyInCart) {
        productAlreadyInCart.quantity += 1;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: '1',
        });
      }
    
      this.saveToStorage();
    },
  
    removeFromCart(productId) {
      const newCart = [];
    
      this.cartItems.forEach((cartItem) => {
        if (productId !== cartItem.productId) {
          newCart.push(cartItem);
        }
      });
    
      this.cartItems = newCart;
    
      this.saveToStorage();
    },
  
    updateDeliveryOption(productId, deliveryOptionId){
      let productAlreadyInCart;
        
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          productAlreadyInCart = cartItem;
        }
      });
    
      productAlreadyInCart.deliveryOptionId = deliveryOptionId;
    
      this.saveToStorage();
    }
  
  };
  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('business-cart-oop');

cart.loadFromStorage();


export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}



businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);

