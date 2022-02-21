const numbers = [10, 55, 4, 2, 8, 1, 50, 30, 80, 5, 10, 2, 5, 3, 4, 90];

const biggestNumbers = numbers.filter( number => number > 20);
const smallNumbers = numbers.filter(n => n<20);
// console.log(smallNumbers)
// console.log(biggestNumbers)


const products = [
    {name:'computer', price: 50000, color:'black', },
    {name:'water bottle', price: 50, color:'green', },
    {name:'phone', price: 15000, color:'white', },
    {name:'book', price: 200, color:'black', },
    {name:'phone strant', price: 120, color:'sky', }
];
const exprence = products.filter( product => product.price >= 200)
// console.log(exprence);
const blacks = products.filter(product => product.color == 'black');
console.log(blacks);
const whites= products.find(product => product.color == 'black')
console.log(whites)