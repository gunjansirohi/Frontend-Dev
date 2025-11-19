function greetUser(name,callback){
    console.log(`Hello ${name}`);
    callback();
}
function endmessg(){
    console.log("Welcome to course");
}
greetUser("Gunjan",endmessg);