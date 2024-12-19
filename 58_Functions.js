// FUnction are used to reuse the code and passing some arguments 
console.log("Functions");

// Function Declaration 
function nice(name) {
    console.log("Hey "+name+" have a nice day");
    console.log("Hey "+name+" you are nice");
    console.log("Hey "+name+" you are good");
}

// Function Name 
nice("Ayush")
nice("Shubham")


function sum(a,b){
    // It will return this value 
    return a+b;
}

let result = sum(3,8);
console.log(result);


// Arrow Function:- Storing a function inside inside a variable 
const func1 = ()=>{
    console.log("I'm arrow function");
}
func1();