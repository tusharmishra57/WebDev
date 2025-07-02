const abc = require('fs');

function print(err, data)
{
    if(err)
    {
        console.log("File not found!!")
    }
    else
    {
        console.log(data);
    }
}

abc.readFile('a.txt', 'utf8', print)  //Asynchronous way
abc.readFile('b.txt', 'utf8', print)  //Asynchronous way

console.log('Done!!');