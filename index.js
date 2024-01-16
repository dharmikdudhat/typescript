//let father: number = 5;
//father = "sfs"; it will give error because num is already specified with type num
//program to add two numbers
//@ts-ignore
function sum1(a, b) {
    return a + b;
}
console.log(sum1(5, 10));
//type annotation in typescript
//is a wayb of explicitly defining the type of variable, function parameters or function return variable
//unknown -> any => undefined, void,null, number , bigint, boolean, string, symbol,object
// number -> number enum -> never
// bigint,boolean -> never
//string-> string enum -> never
//symbol-> unique symbol -> never
//object->array->tuple->never
//object->function->never
//object->constructor->never
var text = "dharmikDydhat";
var upperCase = text.toUpperCase();
var lowerCase = text.toLowerCase();
var isMyNameDharmik = true;
//const maxNumber: BigInt = 90007199254740991n;
var max2 = Number.MAX_SAFE_INTEGER;
var newee = 5;
newee = "djdjd";
newee = true;
// any can be useful when dealing with dynamic data and also while migartion from js
// unknown type is a safer alternative to any because it still enforces type checking and type safety
//variables of type unknpwn can hold values of any type but you must perform type checks or type assertions before using them in specific ways.
console.log();
//type inference in ts
//it is an ability of typescript compiler to automatically assign types to variable s, expressions and functions return values based on their usage and context in the code 
//function invocation
//to execute a function,you simply invoke it 
function greet(name, id) {
    console.log("welcome ".concat(name, " and id is ").concat(id));
    //any is return type of the function 
}
var greeet = function (name, id) {
    console.log("welcome ".concat(name, " and id is ").concat(id));
};
