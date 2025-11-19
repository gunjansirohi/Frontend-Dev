let accounttype="Saving";
let amount=120000;
let years=3;
let rate=0;
if(accounttype==="fixed"){
    rate=6.5;
}
else if(accounttype==="Saving"){
    rate=4;
}
if(amount>100000){
    rate+=1;
}
let total=amount*(Math.pow(1+(rate/100)),years)
total=total.toFixed(2);
console.log("Your Deposite after ,",years," years will be ", total);