const express = require('express');//make node js server with the help of express
const app = express();
const path =require('path');

//atttch app to the http module
const http=require('http').Server(app);
const port=process.env.PORT ||8080;

//attach http server to the socket.io

const io=require('socket.io')(http);



//ROUTE

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname, 'src/index.html'))

})

//create a new connection

io.on('connection',socket=>{
   console.log("A user connected")

   socket.on("disconnect",()=>{
    console.log("A user disconnected")
   })

   //on mostly used for listening 
   socket.on("message",msg=>{
    console.log(" Client message " +msg);
   })
  //emit used for sending messages
   socket.emit("message","message from server side ")
   
})
http.listen(port,()=>{
    console.log("listening on port "+port)
})