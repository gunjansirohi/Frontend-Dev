class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
        discount(perc) {
            const discountAmount = (this.price * perc) / 100;
            this.price -= discountAmount;
        }
        displayProduct(product) {
    return `ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Category: ${product.category}`;
}    
}

const products=[
new Product(1, "Laptop", 1200, "Electronics"),
new Product(2, "Smartphone", 800, "Electronics"),
new Product(3, "Desk Chair", 150, "Furniture")
];

products.forEach(product => {
    product.discount(10);
});

products.forEach(product=>{console.log(product.displayProduct(product))})

const exp=products.filter(product=>product.price>1000);
console.log("Products with price greater than $1000:");
exp.forEach(product=>console.log(product.displayProduct(product))); 