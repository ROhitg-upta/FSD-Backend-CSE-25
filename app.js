//function in javascript

//synchronous function

//  console.log("basic javascript function known as synchronous function");

// function hello(){
//     console.log("this js function")
// }
// hello();
// console.log("synchronous javascript");


//asynchronous function

//arrow function
//syntax : (parameters) => { body }
 
// const hello = () => { 
//  console.log("asynchronous function");
//  setTimeout(() => {
//     console.log("A")
// }, 2000);


// }
// hello();
// console.log("B");

//Function as parameter argument
function hello(n1,n2){
console.log(n1+n2);
console.log(arguments);

}
let a=10;
let b=20;
hello(a,b);
const app=()=>{

    console.log("arguments");
    console.log("window");
    
}
app(); 