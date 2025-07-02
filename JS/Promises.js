
function waitFor3S(resolve)  //resolve is also a function
{
    setTimeout(resolve, 3000)
}

function setTimeoutPromisified()
{
    return new Promise(waitFor3S);
}

function main()
{
    console.log("Its in the main function");
}


setTimeoutPromisified().then(main);   //Promise based approach.