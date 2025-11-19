function car(brand,model){
    this.brand=brand;
    this.model=model;
}
car.prototype.getDetails=function(){
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
}
const myCar=new car("Toyota","Corolla");
myCar.getDetails();