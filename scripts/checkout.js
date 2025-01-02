import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import { loadProducts } from "../data/products.js";

// import '../data/car.js'
// import '../data/backend-practice.js';

loadProducts(() => { // this code read: use every function below as a parameter
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

