// const fs = require('fs');


// function random(print)
// {
//     function print(err, data)
//     {
//         console.log(data);
//     }
// }


// const data = fs.readFileSync('a.txt', 'utf-8', print);



// let p = new Promise(random);



function readFile(fileName)
{
    return new Promise();
}

const p = readFile("a.txt");

function callback(contents)
{
    console.log(contents);
}

p.then(callback);






















// const fs = require('fs');

// function random(print)
// {
//     function print(err, data)
//     {
//         console.log(data);
//     }
// }




// let p = new Promise(random);


// let data = fs.readFile('a.txt', 'utf-8', print);

// function succed()
// {
//     console.log("succeded");
// }

// p.then(console.log(succed));