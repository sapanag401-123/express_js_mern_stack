import express from "express";
// const router = express.Router();
// const products = [];

import {
   create,
   getAll,
   getById,
   remove,
   update,
} from "../controllers/product.controller.js";

const router = express.Router();
const mid = (req,res, next)=>{
   console.log("get all products mid");
   next();
}
//crud product
//get all products
//products
router.get("/", mid, mid, getAll );

//get by id
router.get("/:id", getById); 
   // res.send("<h1>All product</h1>");
// const id = req.params;

// const product = products.find((product) => product.id == Number(id))

//  if (!product) {
//    res.status(404).json({
//     message: "product not found",
//     success: false,
//     date: null,
//    });
//    return;
// }
// res.status(200).json({
//    message:`product by id ${id} fetched`,
//    success: true,
//    data: product,
// });
// });

//create
router.post("products",create );
//    // res.send("<h1>Product created</h1>");
//    const {name, category, price, stock} = req.body;

// products.push({
//    name,
//    category,
//    price,
//    stock,
//    createdAt:new Date(Date.now()),
//    _id: product.length + 1,
// })

//  res.status(201).json({
//     message: "product created",
//     success: true,
//     date: products[products.length - 1]
//    });
// });


//update
router.put("/:id", update);
   

//delete
router.delete("/:id", remove) ;
 
export default router;