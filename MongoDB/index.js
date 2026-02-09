const express = require("express");
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "abc123";

const bcrypt = require("bcrypt");
const {z} = require("zod");

// mongoose.connect("url of the mongodb cloud where you have created the database cluster/Here you have to define a database where the users and todos get stored")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

    // const parsedData = requireBody.parse(req.body);
    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success)
    {
        res.json({
            msg:"Incorrect Format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    try
    {
    const hashedPassword = await bcrypt.hash(password, 5);   //here 5 is the saltround

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });

    res.json({
        msg: "You are Signed in"
    })
    }

    catch(error)
    {
        if(error.code === 11000)
        {
            res.json({
            msg: "User already exist"
            })
        }

        else
        {
            res.status(500).json({
                msg:"Internal Error"
            })
        }
        
    }
    

})

app.post("/login", async function(req, res){

    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if(!user)
    {
        res.json({
            msg: "This email doesn't exist in the DB"
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch)
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
    const title = req.body.title;

    TodoModel.create({
        title,
        userId
    })
})

app.get("/todos",auth, async function(req, res){
    const userId = req.userId;
    
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    })
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