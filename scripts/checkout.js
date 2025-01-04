import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";

// import '../data/car.js'
// import '../data/backend-practice.js';

async function loadPage() {

  try{

    // throw 'error1';

    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]); 

  } catch(error) { // handling error for async await
    console.log('unexpected error. Please try again later', error);
  }

  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}

loadPage();

/*
Promise.all([
  loadProductsFetch(),

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
  
}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/*
loadProducts(() => { // this code read: use arrow function as parameter
  loadCart(() => {
    renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
  });
});
*/


