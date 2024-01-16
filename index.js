"use strict";
//let father: number = 5;
//father = "sfs"; it will give error because num is already specified with type num
//program to add two numbers
//@ts-ignore
// function sum1(a: number, b: number): number {
//   return a + b;
// }
// console.log(sum1(5, 10));
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
// let text: string = "dharmikDydhat";
// let upperCase: string = text.toUpperCase();
// let lowerCase: string = text.toLowerCase();
// let isMyNameDharmik: boolean = true;
//const maxNumber: BigInt = 90007199254740991n;
// const max2: bigint = (Number as any).MAX_SAFE_INTEGER;
// let newee: any = 5;
// newee = "djdjd";
// newee = true;
// any can be useful when dealing with dynamic data and also while migartion from js
// unknown type is a safer alternative to any because it still enforces type checking and type safety
//variables of type unknpwn can hold values of any type but you must perform type checks or type assertions before using them in specific ways.
// console.log();
//type inference in ts
//it is an ability of typescript compiler to automatically assign types to variable s, expressions and functions return values based on their usage and context in the code
//function invocation
//to execute a function,you simply invoke it
// function greet (name:string, id:number):any{
//     console.log(`welcome ${name} and id is ${id}`);
//    //any is return type of the function
// }
// const greeet = (name:string,id:number) => {
//     console.log(`welcome ${name} and id is ${id}`);
// }
//optional and default parameters
//optional parameters are denoted by appending a ? symbol after the parameter in functions and default parameters are specified by providing defalt value in the parameters declaration
// const greet3 = (name?:string , id :number = 1 ) => {
// }
//arrays in ts
const numbers = [1, 2, 3, 4, 5, 6];
const numbers1 = new Array(1, 2, 3, 4, 5, 6);
const names = Array.of("vinod", "dharmik", "father");
