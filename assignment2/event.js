const cart = [
{ item: "Laptop", category: "electronics", price: 45000 },
{ item: "Shoes", category: "fashion", price: 2500 },
{ item: "Book", category: "education", price: 600 }
];
let dis=0;
if(cart.category==="electronics"){
    dis=10;
}
else if(cart.category==="fashion"){
    dis=5;
}
console.log("discount: ",dis);
