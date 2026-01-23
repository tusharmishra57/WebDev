const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "someRandomToken";

const app = express();

app.use(express.json());

const users= [];

//We don't need to create a getToken function

//the html file will open when we hit the "/" localhost
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})


app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: "You are signed up!!"
    })
})


app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u){
        if(u.username == username && u.password == password)
        {
            return true;
        }
    })
        if(foundUser)
        {
            const token = jwt.sign({
                username: username
            }, JWT_SECRET)

            // u.token = token;    We don't need to store it anywhere because JWT stores the information in itself


            res.send({
                token
            })
            console.log(users);
        }
        else
        {
            res.status(403).send({
                message:"Invalid username or Password"
            })
        }
    })



//A middleware for authorisation
function auth(req, res, next)
{
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET);

    if(decodedInformation)
    {
        req.username = decodedInformation.username ;  //modifying the request in auth middleware so that other request should also know who the user is.
        next();
    }
    else{
        res.json({
            msg: "You are not logged in"
        })
    }
}




//Creating an authenticated end point (means request that goes only if user is signin)
app.get("/me", auth, function(req, res){
    const username = req.username;  

    let foundUser = null;
    users.find(function(u){
        if(u.username === username)  //unlike tokens, now we will just find the username of the user and not the token from the database
        {
            foundUser = u;
        }
    })
    if(foundUser)
        {
            res.json({
                username: foundUser.username,
                password: foundUser.password
            })
        }
        else
        {
            res.send({
                message: "Invalid token"
            })
        }
})

app.listen(3000);