// //callback function 

// function hello(n1,n2,cb){
//     console.log("Hello World");
    
//     cb();
// }


// let a=10;
// let b=20;
// console.log(hello(a,b,sayHi));
// console.log(hello(a,b,sayHello));
// console.log(hello(a,b,function(){
//     console.log("callback is calling");
// }));
// function sayHi(){
//     console.log("callback function");


// }
// sayHi();
// function sayHello(){
//     console.log("this is 2nd callback function");
// }
// sayHello();

//Promise

const promiseOne = new Promise((resolve, reject) => {
   console.log("Successfull data passed.....");
   resolve("resolve promises");
});

promiseOne.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});



//day-03
new Promise(function(resolve, reject) {
setTimeout(function(){
    let msg=true;
    if(!msg){
        reject("user : asynch task")
    }else{
        reject("ERROR : undefined data...");
    }
    console.log("asynchrounous task...");
    
},1000)

}).then(function(result) {
    console.log("asynch task 2");


}).catch(function(error) {
    console.log(error); 
});
