// Strings are used to store and manipulate data of string type 

// String are immutable in nature. It means if a string has been made it can't be changed a new string will be made 


let a = "Ayush";

// To access each charcater in string 
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);


// To get length of string . It is a property not a function
console.log(a.length);


// Template literal - to use string inside backtick(``). With help of this we can use both single and double quote inside a string 
// ${} - string interpolation 
let real_name = "Ayush";
let friend = "Shubham";
console.log("His name is "+ real_name + " and his friend name is "+ friend);
// Template literal 
console.log(`His name is ${real_name} and his friend name is ${friend}`)


// There are some escape characters also in js. Ex. \ - to skip double or single quote in string, \n - to add new line, \t - to add a tab space, 


let b = "Ayush";
let c = "test";
let d = "   yo   "

// To convert string to Upper case 
console.log(b.toUpperCase())

// To convert string to Lower case 
console.log(b.toLowerCase())

// To cut a string in parts. Last letter won't be included
console.log(b.slice(1,3))

// To replace character in string and it will only replace first occurance if there are more than one occurance of that character
console.log(b.replace("yu","88"));

// To concat two string 
console.log(b.concat(c));

// To remove extra spaces 
console.log(d.trim());

// To get character at 1st position 
console.log(b.charAt(1));

// To get at which position character a is present 
console.log(b.indexOf(a));


// startswith, endswith - to check whether that string start with or ends with same character it will reply in boolean either true or false 