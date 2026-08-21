// EVENT
// Event loop: sequence of executing function

const f1 = () => {
    
};

const f2 = () => {
    console.log("f2");
};

const f3 = () => {
    console.log("main function");
    setTimeout(f1, 1000);
    setTimeout(f2, 2000);
    new Promise((resolve, reject) => {
        resolve("i am promise");
    }).then((result) => {
        console.log(result);
    });
};

f2();
f3();