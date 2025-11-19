let level=10;
let performanceScore=20;
let coins = (level * 50) + (performanceScore * 10);
let missioncomplete=true;
if(missioncomplete){
    coins=coins*2;
}
let rank="";
if(coins>1000){
    rank="Elite";
}
else{
    rank="Regular";
}
console.log("Total Coins Gain: ",coins);
console.log("Rank ",rank);