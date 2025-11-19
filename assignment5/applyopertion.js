function applyoperation(numbers,callback){
    return numbers.map(callback);
}
function double(num){
    return num*2;
}
function square(num){
    return num*num;
}
const nums=[1,2,3,4,5];
console.log("Doubled Numbers: ",applyoperation(nums,double));
console.log("Squared Numbers: ",applyoperation(nums,square));   