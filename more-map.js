const friends = ['Pranto', 'Maruf Aly', 'Riaj', 'suvo', 'saila aktar'];
const flengths = friends.map(friend => friend.length);
// console.log(flengths)

const products = [
    {name:'computer', price: 50000, color:'black', },
    {name:'water bottle', price: 50, color:'green', },
    {name:'phone', price: 15000, color:'white', },
    {name:'book', price: 200, color:'pink', },
    {name:'phone strant', price: 120, color:'sky', }
];
const productNames = products.map(product => product.price);
// products.map(product => console.log(product))
products.forEach(p => console.log(p))
// console.log(productNames)