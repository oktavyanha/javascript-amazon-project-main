let productHTML = '';

products.forEach((product) => { 
  productHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button 
        class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}"
      >
        Add to Cart
      </button>
    </div>
  `;
});
//data-product-name="${product.name}" is a "data" attribute that allows you to store extra information on an element
//it is always prefixed with "data-" and can be accessed via the dataset property

document.querySelector('.js-products-grid').innerHTML = productHTML;

// format forEach function : array.forEach(value, index) => {}
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {

    const productId = button.dataset.productId;

    //dataset is a property that allows you to access "data" attributes on an element
    // kebab-case in HTML becomes camelCase in JavaScript 
    // (data-product-Id becomes dataset.productId)

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
    console.log(cart);
  });
});