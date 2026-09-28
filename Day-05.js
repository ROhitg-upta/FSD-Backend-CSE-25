//Event 
//EVENT EMITTER IS A CLASS in which we have to use emit
//Program 1 and 2
//emit() on()

// const EventEmitter=require("events");
// const event = new EventEmitter();
// // event.on("greet", ()=>{
// //     console.log("this is event emitter");

// // })
// event.once("greet",()=>{
//     console.log("event trigger only one time");
// })
// event.emit("greet");
// event.emit("greet");
// event.emit("greet");
// event.emit("greet");


//                            -----  LAB EXPERIMENT  -----

//1.1 Create a custom EventEmitter that triggers "greet" or "exit".



// const EventEmitter=require("events");
// const event = new EventEmitter  ();

// event.on("greet", ()=>{  
//     console.log("WELCOME");
// })
//                                                     //BY ME 
// event.on("exit", ()=> {
//     console.log("GOODBYE");
// })

// event.emit("greet");
// event.emit("exit");


class MyEmitter extends EventEmitter{}
const  emit=new MyEmitter()
event.on("greet", (name)=>{
   console.log(`hello ${name}`); //template literals`${}`

})
event.on("exit", ()=>{
    console.log("exit mycustom event emitter..")
})
event.emit("greet","cse25");
event.emit("exit");