//File module : fs module in node js
//CRUD operation: Create, Read, Update, Delete
//create a file: writefile() and readfile() 

const fs = require('fs');
fs.writeFile('myfile.txt', 'This is create command in fs module using writeFile("filename", "content", callback)', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});

//Read a file readfile() method

fs.readFile('myfile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});