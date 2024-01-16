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
// const numbers: number[] = [1, 2, 3, 4, 5, 6];
// const numbers1: number[] = new Array(1, 2, 3, 4, 5, 6);
// const names: string[] = Array.of("vinod", "dharmik", "father");

// for (let i = 0; i< 4;i++ ){
//     console.log(i);
// }

// for (const fruits of fruit){
//     console.log(fruits);
// }

// fruits.array.forEach(element => {
//     console.log(fruits);

// });

//const numbers: number[] = [1, 2, 3, 4, 56, 7];

//map method
// const double: number[] = numbers.map((curVal: number) => curVal * 2);

//filter method
//const even: number[] = numbers.filter((curVal: number) => curVal % 2 === 0);

//objects
// const persn: {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: { city: string; country: string };
// } = {
//   name: "dharmik",
//   age: 22,
//   isStudent: true,
//   address: {
//     city: "ahmedabad",
//     country: "India",
//   },
// };

//type alias in ts
//it is a way to give a name to a specific type or combination of types . it allows you to create a custom name for a type, making iteasier to reuse and refer to the same type in different parts of your code.
// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: { city: string; country: string };
// };

// const persn: Person = {
//   name: "dharmik",
//   age: 22,
//   isStudent: true,
//   address: {
//     city: "ahmedabad",
//     country: "India",
//   },
// };

//call signatures in ts
//refers to the declaration or definition of a function , which includes the functions name , parameters and retuirn types.it defines the structure and type info of a function without including the function's implementations or body.
//they are typically used in side object type notations to describe the shape of functions within object types.

// type Student = {
//   name: string;
//   age: number;
//   gender?: string;
//   greet: (country: string) => string,
// };

// const student1: Student = {
//   name: "dharmik",
//   age: 45,
//   gender: "male",
//   greet:((country):string => `welcome to my place`)
// };

// const introduction: (student1: Student) => string = (
//   student1: Student
// ): string => {
//   const { name, age } = student1;
//   return `welcome ${name}`;

// };

//console.log(...data:introduction(student1));
//console.log(student1.greet("us"));

//enum in typescript
//commonly used for when you want to represent the set of related values and choose one values from multiple options.
//provide a convenient way to define a set of named values and associate them with specific meanings.
// enum roles {
//   user = "user",
//   admin = "admin",
// }

// type loginDetails = {
//   name?: string;
//   email: string;
//   password: string;
//   role: roles;
// };

// const user1: loginDetails = {
//   email: "dharmik@gmail.com",
//   password: "12345",
//   role: roles.admin,
// };


