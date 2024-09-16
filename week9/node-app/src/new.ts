const x:number=1;
console.log(x);

function greet(firstName:string){
  console.log("Hello, " + firstName);
}
greet("FGHJmk");


 function sum(a:number,b:number):number{
return a+b;
 }
 const value =sum(1,2);
 console.log(value);
 
 function isLeagal(age:number):boolean{
  if(age>18){
    return true;
  }
  else{
    return false;
  }
 }

console.log(isLeagal(18));
 
function runafter1s(fn:()=>void){
    setTimeout(fn,1000);
}


runafter1s(function(){
    console.log("Hello after 1s");
    
})


//interfaces

interface User {
  firstName: string,
  lastName: string,
  age: number,
  email: string
}

function isLegal(user: User): boolean {
  return user.age >= 18;
}


const user: User = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  email: "john.doe@example.com"
};

console.log(isLegal(user));

//types

type GreetArg=number | string;
function greeting(arg: GreetArg){

}
greeting(1)
greeting("hello")

//intersection
type Employee={
  name:string,
  age:number
}

type Manager={
  name:string,
  department:string
}

type Teamleader=Employee & Manager;

const t:Teamleader={
  name: "John",
  age: 30,
  department: "IT"
}

//Array

function maxArr(arr:number[]){
  let max=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
}

console.log(maxArr([1,3,4,5,6]));


//Enum

enum Direction {
  Up,
  Down,
  Left,
  Right
}

function DoSomething(Keypressed: Direction) {
  switch (Keypressed) {
    case Direction.Up:
      console.log("You pressed Up");
      break;
    case Direction.Down:
      console.log("You pressed Down");
      break;
    case Direction.Left:
      console.log("You pressed Left");
      break;
    case Direction.Right:
      console.log("You pressed Right");
      break;
    default:
      console.log("Unknown direction");
  }
}

DoSomething(Direction.Up);

//Generics

function identity<T>(arg:T):T {
  return arg
}

let num1=identity<string>("Pritika");
let num2=identity<number>(123456);
console.log(num1, num2);
