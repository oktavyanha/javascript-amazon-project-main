import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency function');

console.log('convert cents to dollars and cents');
if (formatCurrency(2095) === '20.95') {
  console.log('Test passed');
} else {
  console.log('Test failed');
};

console.log('work with 0'); //i.e. this code works with 0 
if (formatCurrency(0) === '0.00') {
  console.log('Test passed');
} else {
  console.log('Test failed');
};

console.log('round up to the nearest cent'); //i.e. this code rounds up to the nearest cent
if (formatCurrency(2000.4) === '20.00') {
  console.log('Test passed');
} else {
  console.log('Test failed');
};