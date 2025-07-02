// function random(resolve)
// {
//     setTimeout(resolve, 3000);
// }



// let p = new Promise(random);

// // console.log(p);


// function callback()
// {
//     console.log("promise succeded");
// }

// p.then(callback);







//Creating your own promise class --> 



function random()
{
    function resolve()
    {
        setTimeout(resolve, 2000);
    }
}

// function callback()
// {
//     console.log("succeded");
// }

// function after(callback)
// {
//     callback();
// }

class abc
{
    constructor(random)
    {
        this.random = random;
    }

    if(resolve)
    {
        function after()
        {

        }
    }


    callback()
    {
        console.log("succeded");
    }

    after(callback)
    {
        callback();
    }

}


// function random1()
// {

// }

let p = new abc(random);

let result = p.after(callback);