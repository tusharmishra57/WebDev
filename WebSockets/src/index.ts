import {WebSocketServer} from "ws";

const wss = new WebSocketServer({port: 8080});

//event handler
wss.on("connection", function(socket){
    socket.send("hi there");

    //if the client side browser like postman of any frontend sends a message, then it will log the message
    socket.on("message", (e) =>{

        if(e.toString() === "ping")
        {
            socket.send("pong");
        }
        else
        {
            socket.send("please type ping");
        }
    })
})