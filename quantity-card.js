const shopingCart = [
    { name: 'iphone', price: 4800, quantity:2 },
    { name: 'samsung', price: 5800, quantity:3 },
    { name: 'xomi', price: 6800, quantity:4 },
    { name: 'vivo', price: 7800, quantity:5 },
    { name: 'realmi', price: 8800, quantity:6 },
    { name: 'oppo', price: 9800, quantity:7 },
]

function productQuantity (products){
    let sum = 0;
    for (let i=0; i<products.length; i++){
        let product = products[i];
        let productTotal =product.price * product.quantity;
        sum = sum+productTotal;
    }
    return  sum;
}

let totalExpence = productQuantity(shopingCart);
console.log('My total expance', totalExpence, 'Taka');
