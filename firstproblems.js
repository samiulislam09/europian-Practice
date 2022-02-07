const products = [
    {name: 'mobile', price: 7000, item: 1},
    {name: 'Chips', price: 10, item: 3},
    {name: 'Oil', price: 50, item: 1},
    {name: 'Mouse', price: 500, item: 1},
    {name: 'Keyboard', price: 600, item: 1},
];
var totalPrice = 0;
var discount = 0;
console.log('your purchase list');

for (var product of products) {
    var itemPrice = product.price * product.item
    totalPrice += itemPrice;
}
console.log(`Your total price is ${totalPrice}`);
if (totalPrice > 50000) {
    discount = 50;
} else if (totalPrice > 20000) {
    discount = 20;
} else if (discount > 1000) {
    discount = 5;
}

if (discount == 0) {
    console.log(`Your payable taka is ${totalPrice}`);
} else {
    const discountAmount = (totalPrice * discount) / 100;
    console.log(`You got ${discount}% discount and discount amount is ${Math.ceil(discountAmount)}`);
    console.log(`After discount your payable taka is ${totalPrice - discountAmount}`);
}