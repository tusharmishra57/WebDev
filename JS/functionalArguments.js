function sum(a, b)
{
    return a+b;
}

function sub(a, b)
{
    return a-b;
}

function mul(a, b)
{
    return a*b;
}

function div(a, b)
{
    return a/b;
}


function doOperation(a, b, op)  //Funcitonal Arguments (calling another function in a function)
{
    return op(a, b);
}

console.log(doOperation(2, 4, div));