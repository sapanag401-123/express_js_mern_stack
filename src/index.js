import http from "http";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import { connectDatabase } from "./config/db.config.js";



//creating express app instance
const app = express();

//const users = [];

//const product = [];

//const category = [];

//*creating http server
const server = http.createServer(app);

//connection database
connectDatabase();

const middleware = (req, res, next) => {
   console.log("middleware 1");
   next();

};
app.use(middleware);

app.use((req, res, next)=>{
   console.log("mid 2");
   req.product = {
      name:"laptop",
   };
   next();
});


//app.use(middleware);

app.use((req, res, next)=>{
   console.log("mid3");
   console.log(req.product);
   if(req.product){
      next();
   }else{
   res.status(401).json({
    message: "unauthorization. Access denied",
   });
}
   //next();
});




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


app.use((err,req,res,next)=>{ //global error handler
   console.log("err handler");
   console.log(err.message);

   res.status(err?.statusCode ?? 500).json({
    message: err?.message ?? "something went wrong ",
    success: false,
    date: null,
   });

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

   //middleware -> vvi in interview-> it is a function execute between req-res cycle
   //1. has access to req obj, res obj and next function
   //2. can execute own logic
   //3. can modify req and res object
   //4. can end req-res cycle

   //types of middleware
   //1 custom mid
       //applicathion level middleware-every request same implement garna xa vana  direct attach garaxa app
       //route level- kunaii euta matraii router handle garna xa vana
       //error handler(err,req,res,next)=>>{}
       //req - mid1 -mid2- mid3-midn -  controller(routing match hunxa ani )
   //2 third party middleware

   //database-mongodb