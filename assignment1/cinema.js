let showtype="morning";
let isstudent=true;
let userage=18;
let numofticket=4;
let price=showtype==="morning"?120:180;
let BestPrice=numofticket*price;
let discount=0;
if(isstudent){
    discount=10;
}
if(userage>60){
    discount=Math.max(discount,20);
}
let totaldis=BestPrice*(1-discount/100);
let servicefee=numofticket>3?50:0;
let total=totaldis+servicefee;
console.log("Best Price",BestPrice);
console.log("Total Discount: ",totaldis.toFixed(2));
console.log("Final Price : ",total.toFixed(2));