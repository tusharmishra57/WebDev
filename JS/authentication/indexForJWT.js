const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "someRandomToken";
const bcrypt = require("bcrypt");
const {z} = require("zod");

const app = express();

app.use(express.json());

const users= [];

//We don't need to create a getToken function


app.post("/signup", async function(req, res){
    
    //Defining a Schema for Zod validation:
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        username: z.string(),
        password: z.string().min(3).max(100)
    })

    //parsing the defined schema to req.body
    const parsedDataWithSuccess = requireBody.safeParse(req.body);  //safeParse will also give error in the form of an object

    if(!parsedDataWithSuccess.success)
    {
        res.json({
            message: "Incorrect Format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    
    const hashedPassword = await bcrypt.hash(password, 5);

    users.push({
        username: username,
        password: hashedPassword,
        email: email
    })

    res.json({
        msg: "You are signed up!!"
    })
})


app.post("/signin", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u){
        if(u.username == username)
        {
            return true;
        }
    })

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
        if(passwordMatch)
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





//Creating an authenticated end point (means request that goes only if user is signin)
app.get("/me", function(req, res){
    const token = req.headers.token   //JWT
    const decodedInformation = jwt.verify(token, JWT_SECRET);  //this will give the original username
    const username = decodedInformation.username;

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