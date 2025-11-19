let feedback="Great product! Fast delivery and amazing sound quality!";
let count=feedback.split().length;
console.log("Word Count: ",count);
let neg=feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
if(neg){
    console.log("Need Improvment");
}
else{
    console.log("Positive FeedBack");
}