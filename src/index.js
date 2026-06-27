import http from "http";
import express from "express";
import userRouters from "/user.routers.js";

//creating express app instance
const app = express();

const users = [];

const product = [];

//*creating http server
const server = http.createServer(app);

app.use(express.json());
   

//ip -> 198.168.1.1:1112

//home -> get, / => <h1> Home Page</h1>
  //  app.get(path, handler);
app.get("/", (req, res) => {
   // res.send("<h1>Home Page</h1>");
   res.status(200).json()
});

//crud users
//get all users
//get /users -> user page
//route param (:id)
app.get("/users", (req, res) =>{
   // res.send("<h1>All Users</h1>");
   const query = req.query;
   console.log(query);

    res.status(200).json({
    message: "user fetched",
    success: true,
    date: users,
   //{
   //      _id: 1, 
   //      name: "John Doe",
   //      email: "john@gmail.com"
   //  },
   });
});

//get by id
//users/100 => {id:100}
// /posts/:userId/:postId => /posts/1/2 => {postId:2,userId}

app.get("/users/:id", (req, res) =>{
   // res.send("<h1>All Users</h1>");
   //req.param => {} => {id:1}
   //console.log(req.params);
   //const id = req.params.id;

   const {id} = req.params;

   const user = users.find((user) => user._id === Number(id));

   if(!user){
res.status(400).json({
    message: "user by id fetched",
    success: true,
    date:null,
   });
   return;
}

res.status(200).json({
   message: "user by id ${id} fetched",
    success: true,
    date:null,
});
});


//create
app.post("/users", (req, res) =>{
   // res.send("<h1>User created</h1>");
   //console.log(req.body);
const {name,email,password} = req.body

users.push({
   name,
   email,
   password,
   createdAt:Date.now(),
   _id: users.length +1,
})

   res.status(200).json({
    message: "user created",
    success: true,
    date:users[users.length - 1],
   });
});

//update
app.put("/users/:id", (req, res) =>{
   // res.send("<h1>User updated</h1>");
      //const id = req.params.id;
      const {id} = req.params;

      const {name,email,password} = req.body

      const index = users.findIndex((user) => user._id === Number(id));

      if(index === -1){
         res.status(404).json({
message: "user not found",
    success: false,
    date:null
         });
         return
      }

      users[index] = {
         ...users[index],
         name,
         email,
         password
      };

      res.status(201).json({
message: "user updated",
    success: true,
    date:users[index],
         });

});


//delete
app.delete("/users/:id", (req, res) => {
// res.send("<h1>User Deleted</h1>");

const {id} = req.params;
      const index = users.findIndex((user) => user._id === Number(id));

      if(index === -1){
res.json({
message: "user not found",
    success: false,
    date:null
         });
         return
      }

   users.slice(index,1);
   res.json({
      message: "user deleted",
    success: true,
    date:null
   });
});
app.use("/users",useRouters);

//crud product
app.get("/product", (req, res) =>{
   // res.send("<h1>All product</h1>");
   

 res.json({
    message: "product fetched",
    success: true,
    date:product,
   });
});

//get by id
app.get("/product/:id", (req, res) =>{
   // res.send("<h1>All product</h1>");
const id = req.params.id;

 res.json({
    message: "product fetched",
    success: true,
    date: {
        _id: 1, 
        // name: "jacket",
        // price:'1000',
        // brand:"zara"

        name: "Laptop",
        category: "Electronics",
        price: "85000",
        stock: "15"
    },
   });
});

app.post("/product", (req, res) =>{
   // res.send("<h1>Product created</h1>");
   const {name, category, price, stock} = req.body

product.push({
   name,
   category,
   price,
   stock,
   createdAt:new Date(Date.now()),
   _id: product.length +1,
})

 res.json({
    message: "product created",
    success: true,
    date:product[product.length - 1]
   });
});

//update
app.put("/product/:id", (req, res) =>{
   // res.send("<h1>Product updated</h1>");
//const id = req.params.id;
const {id} = req.params;

      const {name, category, price, stock} = req.body

      const index = product.findIndex((product) => product._id === Number(id));

 
      if(index === -1){
         res.json({
message: "product not found",
    success: false,
    date:null
         });
         return
      }

      product[index] = {
         ...product[index],
         name,
         category,
         price,
         stock
      };

      res.json({
message: "product updated",
    success: true,
    date:product[index],
         });

});


//delete
app.delete("/product/:id", (req, res) => {
   // res.send("<h1>Product Deleted</h1>");
const id = req.params.id;

 res.json({
    message: "product delete",
    success: true,
    date: {
        _id: 1, 
        name: "laptop",
    },
   });
});



 
server.listen(8081, 'localhost', ()=>{
    //127.0.0.1
    console.log(`Server is running at http://localhost:8081`);
    console.log("press ctrl+c to close the server");
});

//brand, order, 

//Express js /  nestjs -> framework
//get/users -> handler
//post/users -> handler

//school management
//student, teacher

//http://localhost:8081/users?name=john&page=1&limit=10(? paxadi ko 
//req.query maa aauxa)

//req.url
//req.param -> {}
//req.query -> {name:"john",page:'1',limit:'10'}
//req.body -> {}

//post/users =>

//Express js /  nestjs -> framework
//get/users -> handler
//post/users -> handler

//http://localhost:8081/users/?namesapana&page=1$limit=10

//req.params
//req.query ->{name:"sapana gurung,page"'1'a,limit:'10'}->used for filter
//req.body -> {}

//post/users  =>req.body


//git .add



//  new folder -> school management

//such as student, teacher
//REST api
//REST->Representational state transfer
//api->application programming interface
//constraint

//stateless->...........main important point..........
// server side ma manage gardaiina(not store in server)
//client-server
//layered architecture(arch)
//client-cdn(content delivery network), proxy, loadbalancer, ....-server
//cacheable respoinse
   //cache-control

//uniform interface
   //route define naming garda
   //use noun such as get/users and not use getusers
   //use meaningful http method =>GET, POST, PUT, PATCH, DELETEL   
   //use meaningful response status code
   //100-199 ->informational
   //200-299 ->success
   //200->ok, 201->created

//search http response status codes
   //300-399 ->redirection
   //400-bad re
   //401
   //403
   //404
   //400-499 ->client side error ,,404
   //500-599 ->server side error ,500 ,502
   //500
   //502

//end point -> it is a path which access api
//ask for user endpoint -> get /users 
//get /users /1

// /dashboard => {}

//resources-data or object which is identify end point
 //example ->/dashboard => {}
   //users =>json, html, 