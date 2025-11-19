const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validnum = [];
const invalidnum = [];

console.log("Detailed Data Report:\n");

apiData.forEach((item, index) => {
    const num = Number(item);
    const bool = Boolean(item);
    const str = String(item);

    const isValidnum = !isNaN(num) && item !== " " && item !== "100px";

    console.log(`Data[${index}]:`, item);
    console.log(`Number: ${isNaN(num) ? "Invalid" : num}`);
    console.log(`Boolean: ${bool}`);
    console.log(`String: "${str}"`);

    if (isValidnum) {
        validnum.push(num);
    } else {
        invalidnum.push(item);
    }

    console.log("-----------------------------");
});

console.log("Valid Numbers:", validnum);
console.log("Invalid Numbers:", invalidnum);