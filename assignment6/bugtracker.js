console.log("Start");
setTimeout(()=>{
    console.log("Macrotast: setTimeout");
    },0);

Promise.resolve().then(()=>{
    console.log("Microtask: Promise.then");
});
console.log("End");
