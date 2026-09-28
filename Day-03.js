
// new Promise(function(resolve, reject) {
// setTimeout(function(){
//     let msg=true;
//     if(!msg){
//         reject("user : asynch task")
//     }else{
//         reject("ERROR : undefined data...");
//     }
//     console.log("asynchrounous task...");
    
// },1000)

// }).then(function(result) {
//     console.log("asynch task 2");


// }).catch(function(error) {
//     console.log(error); 
// });



//Asynchronous js using async/await

// async function test(){
//     console.log("2:message");
//     await console.log("3:message");
//     console.log("4:message");

// }
// console.log("1:message");


// test();
// console.log("5:message");

//create promises that resolve  with Assignment submitted and print using then(), reject with submission failed

// promise = new Promise((resolve, reject) => {
//     let assignmentSubmitted = true;
//     if(assignmentSubmitted){
//         resolve("Assignment submitted");
//     } else {
//         reject("Submission failed");
//     }

// });

// promise.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// });



//Async function that display user data
//async function for data json data fetch 


async function data(){
    console.log("2:message");
    const response=await fetch("./studentdata.json");
    console.log(response.status);
    
    const std=await response.json();
    return std; 

    await console.log("3:message");
    console.log("4:message");

}
console.log("1:message");


data().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
