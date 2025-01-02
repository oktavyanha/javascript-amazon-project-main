export class Cart{
  cartItems; // we no need 'let' anymore // public class field
  #localStorageKey; // # is a private class field/property

  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey; // class parameter saved in constructor
    this.#loadFromStorage(); // private method

    //'this' refers to the object that we will define later
  };  

  #loadFromStorage(){ // this.cartItems is the same as cart.cartItems 
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [{ // || is a logical OR operator
        productId :"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1',
      }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2',
      }
    ];
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  };

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
  };

  removeFromCart(productId) {
    const newCart = [];
  
    this.cartItems.forEach((cartItem) => {
      if (productId !== cartItem.productId) {
        newCart.push(cartItem);
      }
    });
  
    this.cartItems = newCart;
  
    this.saveToStorage();
  };

  updateDeliveryOption(productId, deliveryOptionId){
    let productAlreadyInCart;
      
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        productAlreadyInCart = cartItem;
      }
    });
  
    productAlreadyInCart.deliveryOptionId = deliveryOptionId;
  
    this.saveToStorage();
  };

  calculateCartQuantity() {
    let cartQuantity = 0;
  
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  
    return cartQuantity;
  };

  updateQuantity(productId, newQuantity) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    matchingItem.quantity = newQuantity;
  
    this.saveToStorage();
  }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('business-cart-oop');

console.log(cart);
console.log(businessCart);

