import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/car.js'
// import '../data/backend-practice.js';

async function loadPage() {

  await loadProductsFetch();

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve('value3'); // resolve will return 'value3' as value variable
    });
  });

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


