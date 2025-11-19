let arr = Array.from({ length: 8 }, () => Math.floor(Math.random() * (100 - 30 + 1)) + 30);
let sum=0;
let pass=0;
for(let i of arr){
    sum+=i;
    if(i>=50){
        pass++;
    }
}
console.log("Maximun number in arr: ",Math.max(...arr));
console.log("Minimum Number in arr: ",Math.min(...arr));
console.log("Average: ",sum/8);
console.log("Number of std who passed: ",pass);