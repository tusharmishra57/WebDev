// QUESTION:  Write code that
// 1. logs hi after 1 second
// 2. logs hello 3 seconds after step 1
// 3. logs hello there 5 seconds after step 2


setTimeout(function main()
{
    console.log("hi");

    setTimeout(function main2()
{
    console.log("hello");

    setTimeout(function main3()
{
    console.log("hello there");
}, 5000)
}, 3000)
}, 1000)



// above code is callback hell.
// To solve this:

function setTimeoutPromisified(duration)
{
    return new Promise(function (resolve)
{
    setTimeout(resolve, duration);
})
}


// Promise Chaining
setTimeoutPromisified(1000).then(function main()
{
    console.log("hi");
    return setTimeoutPromisified(3000);
}).then(function main2()
{
    console.log("hello");
    return setTimeoutPromisified(5000);
}).then(function main3()
{
    console.log("hello there");
});