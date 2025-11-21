function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.applyDiscount = function(percent) {
    const discountAmount = this.price * (percent / 100);
    const newPrice = this.price - discountAmount;
    return newPrice;
};
const product1 = new Product("Laptop", 50000);
const product2 = new Product("Headphones", 2000);
const product3 = new Product("Keyboard", 1500);

console.log( product1.applyDiscount(10));    
console.log(product2.applyDiscount(25)); 
console.log( product3.applyDiscount(5)); 