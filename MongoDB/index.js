const express = require("express");
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "abc123";

// mongoose.connect("url of the mongodb cloud where you have created the database cluster/Here you have to define a database where the users and todos get stored")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });

    res.json({
        msg: "You are Signed in"
    })

})

app.post("/login", function(req, res){

    const email = req.body.email;
    const password = req.body.password;

    const user = UserModel.findOne({
        email: email,
        password: password
    })

    if(user)
    {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET)
    }
    else{
        res.status(403).json({
            msg: "Incorrect Credentials"
        })
    }

})

app.post("/todo",auth, function(req, res){
    const userId = req.userId;
    
})

app.get("/todos",auth, function(req, res){

})

function auth(req, res, next)
{
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET);

    if(decodedInformation)
    {
        req.userId = decodedInformation.id;
        next();
    }
    else
    {
        res.json({
            msg: "Not logged in"
        })
    }
}

app.listen(3000);