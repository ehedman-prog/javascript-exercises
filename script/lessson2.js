const price = prompt("enter price");
console.log(price);

const priceNoSymbol = price.slice(1);
console.log(priceNoSymbol);

const priceNumber = parseFloat(priceNoSymbol);
const discountedPrice = priceNumber * 0.9;
console.log(`the price is: $${discountedPrice}`);

