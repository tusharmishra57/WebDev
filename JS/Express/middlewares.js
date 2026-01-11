const express = require("express");

const app = express();


//Middleware
function isOldEnough(req, res, next)
{
    const age = req.query.age
    if(age>=14)
    {
        next();
    }
    else
    {
        res.json({msg: "You are not old enough"});
    }
}

app.use(isOldEnough);  // If  you want to use isOldEnough for all the request below then do this way otherwise for individually, do- app.get("/ride1", isOldEnough, function(req,res))

//For ride 1
app.get("/ride1", function(req, res)
{
    res.send("You have succesfully completed the ride.")
})

//For ride 2
app.get("/ride2", function(req, res)
{
    res.send("You have succesfully completed the ride.")
})






app.listen(3000);