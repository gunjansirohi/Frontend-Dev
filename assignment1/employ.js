let baseSalary = 120000;    
let rating = 4;            
let experience = 6;         
let bonusRate = 0;
if (rating === 5) {
  bonusRate = 20;
} else if (rating === 4) {
  bonusRate = 15;
} else if (rating === 3) {
  bonusRate = 10;
}
if (experience > 5) {
  bonusRate += 5;
}
let calculatedBonus = baseSalary * (bonusRate / 100);
let finalBonus = calculatedBonus;
if (baseSalary > 100000 && calculatedBonus > 25000) {
  finalBonus = 25000;
}
let totalSalary = baseSalary + finalBonus;
console.log("Calculated Bonus: ",calculatedBonus.toFixed(2));
console.log("Final Bonus (after cap):",finalBonus.toFixed(2));
console.log("Total Salary after Bonus:",totalSalary.toFixed(2));