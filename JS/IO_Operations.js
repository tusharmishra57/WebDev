const abc = require('fs');  //Calling a library called File System.

const data = abc.readFileSync('a.txt', 'utf8');  //utf8 is a way of representing the data in which we want the answer.
const data2 = abc.readFileSync('b.txt', 'utf8');    

console.log(data);
console.log(data2);