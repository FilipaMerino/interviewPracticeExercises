// What will be logged in the first and second examples?

let var1;
console.log(var1);
console.log(typeof var1);
// will return "undefined" - the variable is declared but the value is not assigned yet.


// ____________________________________
let var2 = null;
console.log(var2);
console.log(typeof var2);
// will return "object" -> longstanding bug in javaScript
//____________________________________________



// What will be console.logged here:
//Question 1:
console.log(foo); //=> error: is not defined
foo = 1;
//_______________________________
// Question 2:
console.log(foo); //=> is gonna be logged undefined but no error. because having the var on the bottom is the same as having on the top, so it knows that we have a variable; although, it still doesn't know the value of the variable, because that comes after.
var foo = 2;
//_______________________________
//Question 3:
foo = 3;
console.log(foo);
var foo;
// => will be logged 3.
