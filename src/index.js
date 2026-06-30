import http from "http";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js"


//creating express app instance
const app = express();

//const users = [];

//const product = [];

//const category = [];

//*creating http server
const server = http.createServer(app);

app.use(express.json());
   

//ip -> 198.168.1.1:1112

//home -> get, / => <h1> Home Page</h1>
  //  app.get(path, handler);
app.get("/", (req, res) => {
   res.status(200).json({
   message:"server is up & running",
   // res.send("<h1>Home Page</h1>");
});
});


//using routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/category", categoryRoutes);


server.listen(8081, () => {
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

   //middleware -> vvi in interview
   //database-mongodb