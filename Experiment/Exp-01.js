//1. Create a custom EventEmitter that triggers "greet" or "exit".

// const EventEmitter=require('node:events');

// class MyEmitter extends EventEmitter{}

// const  myEmitter=new MyEmitter();

// myEmitter.on("greet", (name)=>{
//    console.log(`hello ${name}`); //template literals`${}`

// })
// myEmitter.on("exit", ()=>{
//     console.log("exit mycustom event emitter..")
// })
// myEmitter.emit("greet","cse25");
// myEmitter.emit("exit");


//2. Simulate DOM-like event handling in Node.js using events.

const EventEmitter = require('events');

class Button extends EventEmitter {
    mouseOver() {
        this.emit('mouseover');
    }
}

const button = new Button();

button.on('mouseover', () => {
    console.log('Mouse over event handled!');
});

button.mouseOver();