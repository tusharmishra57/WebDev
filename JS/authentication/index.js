const express = require("express");

const app = express();

app.use(express.json());

const users= [];

//This function will create a random token
function generateTokens()
{
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
                    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 
                    'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
                    'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


    let token = ""
    for(let i=0; i<32; i++)
    {
        token = token + options[Math.floor(Math.random() * options.length)];  
    }
    return token;
}


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
            const token = generateTokens();
            u.token = token;
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


})


//Creating an authenticated end point (means request that goes only if user is signin)
app.get("/me", function(req, res){
    const token = req.headers.token   //token is what user will send in the header along with a request

    let foundUser = null;
    users.find(function(u){
        if(u.token === token)
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