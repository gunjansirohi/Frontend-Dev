
const menu = {
    burger: 80,
    pizza: 150,
    pasta: 120,
    coffee: 50,
    sandwich: 70
};


function calculateBill(orderItems) {
    try {
     
        const prices = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(` Invalid item ordered: ${item}`);
            }
            return menu[item];
        });

      
        const total = prices.reduce((sum, price) => sum + price, 0);

        console.log("Prices:", prices);
        console.log(`Total Bill: ₹${total}`);
        return total;

    } catch (error) {
        console.error(" Error:", error.message);
    }
}

 console.log("---- Order 1 ----");
calculateBill(["burger", "pizza", "coffee"]);  

console.log("---- Order 2 ----");
calculateBill(["burger", "fries"]);           
