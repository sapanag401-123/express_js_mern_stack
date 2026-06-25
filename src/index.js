import http from "http";
import express from "express";

//creating express app instance
const app = express();



//*creating http server
const server = http.createServer(app);

//home ->get, /=> <.h1>Home page</h1>
app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>");
});
   
//get all users
app.get("/users",(req,res)=>{
    //res.send("<h1> all users</h1>");
    res.json({
    message:"user created",
    success:true,
    data:{
        _id:1,
        name:"sapana gurung",
        email:"sapanagrg123@gmail.com",
    },
   })
});

//get by id
//user/100 => {id:100}       rout params
app.get("/users/:id",(req,res)=>{
    //res.send("<h1> all users</h1>");
    //req.params => {}  => {id:1}


    const id = req.params.id;
    res.json({
    //message:`user by id 1 fetched`,
    message:`user by id ${id} fetched`, //multiple ko lagi
    success:true,
    data:{
        _id:1,
        name:"sapana gurung",
        email:"sapanagrg123@gmail.com",
    },
   })
});





//post/create
app.post("/users",(req,res)=>{
   // res.send("<h1> users created </h1>");
   res.json({
    message:"user created",
    success:true,
    data:{
        _id:1,
        name:"sapana gurung",
        email:"sapanagrg123@gmail.com",
    },
   })
});


   //update
   app.put("/users/:id",(req,res)=>{
    res.send("<h1> users updated </h1>");
});


//delete
   app.delete("/users/:id",(req,res)=>{
    res.send("<h1> users delete </h1>");
});
   

//crud products
//get all products
app.get("/products",(req,res)=>{
    //res.send("<h1> all products</h1>");
    res.json({
    message:"products created",
    success:true,
    data:{
        _id:1,
        name:"sapana gurung",
        email:"sapanagrg123@gmail.com",
    },
   })
});

//get by id
//user/100 => {id:100}       rout params
app.get("/products/:id",(req,res)=>{
    //res.send("<h1> all users</h1>");
    //req.params => {}  => {id:1}


    const id = req.params.id;
    res.json({
    //message:`user by id 1 fetched`,
    message:`products by id ${id} fetched`, //multiple ko lagi
    success:true,
    data:{
        _id:1,
        name:"sapana gurung",
        email:"sapanagrg123@gmail.com",
    },
   })
});







//post
app.post("/produncts",(req,res)=>{
    //res.send("<h1> products created </h1>");
    res.json({
    message:"products created",
    success:true,
    data:{
        _id:1,
        name:"salina shrestha",
        email:"sapanagrg123@gmail.com",
    },
   })
});

   //update
   app.put("/products/:id",(req,res)=>{
    res.send("<h1> products updated </h1>");
});

//delete
   app.delete("/products/:id",(req,res)=>{
    res.send("<h1> products delete </h1>");
});


//ip -> 198.168.1.1:1112

server.listen(8081, 'localhost', ()=>{
    //127.0.0.1
    console.log(`Server is running at http://localhost:8081`);
    console.log("press ctrl+c to close the server");
});


//Express js /  nestjs -> framework
//get/users -> handler
//post/users -> handler

//git .add



//  new folder -> school management

//such as student, teacher