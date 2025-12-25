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



// function readFile(fileName)
// {
//     return new Promise();
// }

// const p = readFile("a.txt");

// function callback(contents)
// {
//     console.log(contents);
// }

// p.then(callback);


function person(arr)
{
    let arr1 = [];

    for (let i=0; i<arr.length; i++)
    {
        if (arr[i].age > 18 && arr[i].gender === "male")
        {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}


const user = [{Name: "a", age: 20, gender: "male"}, {Name: "b", age: 25, gender: "female"}, {Name: "c", age: 44, gender: "male"}];


console.log(person(user));













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