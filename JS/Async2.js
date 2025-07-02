console.log("hi!!");

function timeout()
{
    console.log("the timeout function");
}

setTimeout(timeout, 1000);   //will start executing after 1000 miliseconds.

console.log("Hello again!!");