// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  let priceAmount = parseFloat(price.innerHTML);
  let quantityAmount = parseFloat(quantity.valueAsNumber); // finally returns a number and not NaN!

  let subtotalPrice = priceAmount * quantityAmount;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let product of allProducts){
    
    totalPrice += updateSubtotal(product);
  }
  // finally works!

  // ITERATION 3
let totalValueElement = document.querySelector('#total-value span'); //must include span to not lose currency
totalValueElement.innerText= totalPrice;
return totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
