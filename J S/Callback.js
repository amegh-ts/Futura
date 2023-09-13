function greet(name, callback){
    console.log("Hello " + name + "!");
    callback();
}
function message(){
    console.log("Process Completed.......!");
}
greet("John", message)