function simulatesteps(name){
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000; 
        setTimeout(() => {
            if(Math.random() < 0.8){
                console.log(`${name} is ready`);
                resolve();
            }
            else{
                reject(`Error during ${name.toLowerCase()}`);
            }
        }, delay);    });
}

function boiolwater(){
    console.log("Boiling water...");
    return simulatesteps("Boiling water");
}
function makecoffee(){
    console.log("Making coffee...");
    return simulatesteps("Making coffee");
}
function pourcoffee(){
    console.log("Pouring coffee...");
    return simulatesteps("Pouring coffee");
}
boiolwater()
    .then(() => makecoffee())
    .then(() => pourcoffee())
    .then(() => console.log("Coffee is ready!"))
    .catch((error) => console.log(error));