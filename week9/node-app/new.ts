// const x:number=1;
// console.log(x);

// function greet(firstName:string){
//   console.log("Hello, " + firstName);
// }
// greet("FGHJmk");

//calc sum
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