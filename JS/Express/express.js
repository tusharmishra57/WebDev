/// Create an in memory hospital
//  You need to create 4 routes (4 things that hospital can do)
//  l. GET - User can check how many kidneys they have and their health
//  2. POST - User can add a new kidney
//  3. PUT - User can replace a kidney, make it healthy
//  4. DELETE - User can remove a kidney

const express = require("express");
const app = express();


const user = 
[{
    name:"Tushar", kidneys:[{
        healthy: false}, 
    {
        healthy: true
    }]
}];

app.use(express.json())

//GET
app.get("/", function(req, res){
    const numberOfKidneys = user[0].kidneys.length

    let healthyKidneys = 0;
    for (var i =0; i<numberOfKidneys ; i++ )
    {
        if(user[0].kidneys[i].healthy)
        {
            healthyKidneys++;
        }
    }

    const unhealthyKidneys = numberOfKidneys-healthyKidneys;

    res.json({
        numberOfKidneys,
        healthyKidneys,
        unhealthyKidneys,
    })
})


//POST
app.post("/", function(req, res)
{
    console.log(req.body)
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"   //we have to send a res.json otherwise the request will remain hung(keep loading)
    })
})


//PUT
app.put("/", function(req, res)
{
    for(let i=0; i<user[0].kidneys.length; i++)
    {
        user[0].kidneys[i].healthy = true;  //all the unhealthy kidneys will set to healthy.
    }
    res.json({});  //need to send a res.json but no need to give any value or something.
})


app.listen(3000);