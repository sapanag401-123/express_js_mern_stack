import express from "express";
const router = express.Router();

//crud product
router.get("/product", (req, res) =>{
   // res.send("<h1>All product</h1>");
   

 res.json({
    message: "product fetched",
    success: true,
    date:product,
   });
});

//get by id
router.get("/product/:id", (req, res) =>{
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

router.post("/product", (req, res) =>{
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
router.put("/product/:id", (req, res) =>{
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
router.delete("/product/:id", (req, res) => {
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
export default router;