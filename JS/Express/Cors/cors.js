const express = require("express");
const cors = require("cors");

const app = new express();

//if you want to allow any fetch requests to access this backend do this-
app.use(cors())

//if you want some specific fetch request to access -
// app.use(cors({
//     domains: ["http://google.com", "http://localhost:3000/cors"]
// }))

app.use(express.json());


function sum(req, res)
{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        sum: a + b
    })
}
app.post("/sum", sum);

app.listen(5000);