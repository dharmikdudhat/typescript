//*typescript
//TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.
//TypeScript is a syntactic superset of JavaScript which adds static typing.
//let father: number = 5;
//father = "sfs"; it will give error because num is already specified with type num
//?npm install typescript --save-dev
//?npx tsc
//?npx tsc --init

//*When creating a variable, there are two main ways TypeScript assigns a type:
//?Explicit:- let firstName: string = "Dylan";
//?Implicit:- let firstName = "Dylan";

//*program to add two numbers
//@ts-ignore
// function sum1(a: number, b: number): number {
//   return a + b;
// }
// console.log(sum1(5, 10));

//*type annotation in typescript
//is a wayb of explicitly defining the type of variable, function parameters or function return variable
//?unknown -> any => undefined, void,null, number , bigint, boolean, string, symbol,object
//? number -> number enum -> never
//? bigint,boolean -> never
//?string-> string enum -> never
//?symbol-> unique symbol -> never
//?object->array->tuple->never
//?object->function->never
//?object->constructor->never

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

//*type inference in ts
//it is an ability of typescript compiler to automatically assign types to variable s, expressions and functions return values based on their usage and context in the code

//*function invocation
//to execute a function,you simply invoke it

// function greet (name:string, id:number):any{
//     console.log(`welcome ${name} and id is ${id}`);
//?any is return type of the function
// }

// const greeet = (name:string,id:number) => {
//     console.log(`welcome ${name} and id is ${id}`);
// }

//*optional and default parameters
//optional parameters are denoted by appending a ? symbol after the parameter in functions and default parameters are specified by providing defalt value in the parameters declaration

// const greet3 = (name?:string , id :number = 1 ) => {

// }

//*arrays in ts
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

//*map method
// const double: number[] = numbers.map((curVal: number) => curVal * 2);

//*filter method
//const even: number[] = numbers.filter((curVal: number) => curVal % 2 === 0);

//*objects
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

//*type alias in ts
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

//*call signatures in ts
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

//*enum in typescript
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

//*tuple in typescript
//they sre the data structure that allows you to store fixed size collection of elements of diffrent types.
//diffrence with array is that the types of element in tuples are fixed and declared at the time of creation.
//A tuple is a typed array with a pre-defined length and types for each index.
//Tuples are great because they allow each element in the array to be a known type of value.

// type PersonInfo = readonly [string, number, boolean];
// const person1: PersonInfo = ["dharmik", 55, true];

//*union in ts
//union allows you to specify that a variable can hoeld values of multiple types | (pipe) symbol is used to define a union type .
//in ts , when using a union type , it is essential to ensure that at least one of the types in the union includes all the required properties.

//const inputValue : (value : string | number | boolean) => void = (value : string | number | boolean) : void => {}

// const userInput: (value: number | string) => void = (
//   value: number | string
// ): string | number => {
//   if (typeof value === "number") {
//     return value * 2;
//   } else if (typeof value === "string") {
//     return value.toUpperCase();
//   } else {
//     throw new Error("invalid input");
//   }
// };

//*intersection in ts
//allows you to combine multiple types into a single type. & (ampersand) is udes to define intersection in ts.

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   emp_id: number;
//   department: string;
// };

//type EmployeeDetails = Person | Employee; //?you can just add details of person obj or you can just add details of employee or you can add details of both
//type EmployeeDetails1 = Person & Employee; //?both the objects fields are required to be written

//*generics in ts
//allows you to create reusable components or functions that can work with multiple data types

// function userInput  <T>(value: T): T  {
//    return value;
//   };
//   const numberResult : number = userInput<number>(42);

//*generics multiple type variables

// function add<T, U>(a: T, b: U): T {
//   console.log(typeof a);
//   console.log(typeof b);
// }

//*interface in ts
//is a powerful feature that allows you to define a contarct for an object's shape.
//it specifies the properties and their types that an object must have to be considered of that particular interface type.
//interfaces are primarily used for typechecking during development and do not generate any js code at runtime.

// interface Employee  {
//     emp_id: number;
//     department: string;
//   };

//*class and constructor in type script
//class is a term of oops is a blue print for creating objects
//class name written in camelcase

// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
// }
// const person1: Person = new Person("dharmik", 12, ["reading", "writing"]);

//*inheritance in ts
//allows a class to reuse the functionality of an existing class wothout rewriting it.

// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }

//   introduce(): string {
//     return `welcome ${this.name}`;
//   }
// }

// class Student extends Person {
//?the super keyword is used in the context of class inheritance.it allows a subclass to call methods or access properties of its superclass.
//   grade: number;
//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }
//   introduce(): string {
//     return `${super.introduce()}`;
//   }
// }
// const person1: Person = new Person("dharmik", 12, ["reading", "writing"]);

//*access modifiers in ts
//?there are three access modifiers in ts public, protected and private

// class Person {
//   public name: string;
//   protected age: number;
//   private hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }

//   introduce(): string {
//     return `welcome ${this.name}`;
//   }
// }

//*shorthand properties in classes

// class Person {
//   constructor(
//     public name: string,
//     public age: number,
//     protected hobbies: string[]
//   ) {}

//   introduce(): string {
//     return `welcome ${this.name}`;
//   }
// }

//*getter and setter methods in typescript
//in typescript classes , you can use getter and setter methods to control the access and modification of class properties.
//getter method allow you to retrive the value of a property.
//setter method allow you to set the value of the propertywith additional logic and validation.

// class Person {
//   private _age: number | undefined;
//   constructor(
//     public name: string,

//     protected hobbies: string[]
//   ) {}
//set method take only one parameter
// public set age(age: number) {
//   if (age > 150 || age < 0) {
//     throw new Error("invalid age");
//   } else {
//     this.age = age;
//   }
// }
//get method do not take any parameter
//   public get age() {
//     if (this._age === undefined) {
//       throw new Error("undefined age");
//     }
//     return this._age;
//   }

//   introduce(): string {
//     return `welcome ${this.name}`;
//   }
// }

//*static properties and method in ts
//in ts, static methods and properties belogs to the calss itself rather then to instances of the class.
//by making methods and properties static, we can access them directly from class without needing to create an instance of that class.

// class MathOperations {
//   public static PI: number = Math.PI;
//   public static add(num1: number, num2: number) {
//     return num1 + num2;
//   }
// }

//*abstarct classes in ts
//it provides a way to define common properties and methods that multiple derived classes can share.
//this promotes code reuse and helps establish a common interface for related classes.
//abstract classes focus on class inheritance and sharing common functionality, whereas the useContext hook in react focuses on managing global state and allowing components to comsume that state.
//abstarct class cannot have instances they are only made for taking and use in another class

// abstract class Shape {
//   abstract calculateArea(): number;
//   abstract dispalyArea(): void;
// }

// class Circle extends Shape {
//   constructor(protected radius: number) {
//     super();
//   }

//   public calculateArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   dispalyArea(): void {
//     console.log('bsdjjf');
//   }
// }

//*interface vs types
//?1.
//USE CUSTOM TYPES WHEN YOU NEED UNIONS , INTERSECTIONS OR MAPPED TYPES.
//USE INTERFACES WHEN DEFINING OBJECTS SHAPE OR CLASSE THAT ADHER TO THE CONTRACT.
//?2.
//INTERFACES CAN EXTEND OTHER INTERFACES TO INHERIT THEIR MEMBER,
//CUSTOM TYPES CAN USE UNIONS AND INTERSECTIONS FOR MORE COMPLEX TYPE COMPOSITIONS.
//INTERFACES CAN HAVE SAME NAME

