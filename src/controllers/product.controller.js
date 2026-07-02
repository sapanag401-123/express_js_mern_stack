const products = [];


//crud product
//get all products
//products
export const getAll = (req, res) =>{
   // res.send("<h1>All product</h1>");
   console.log("get all product");
   console.log(req.user);
 res.status(200).json({
    message: "product fetched",
    success: true,
    date:product,
   });
};

//get by id
export const getById = (req, res, next) =>{
   console.log("get all product");
   console.log(req.user);
   // res.send("<h1>All product</h1>");
const { id } = req.params;

const product = products.find((product) => product.id == Number(id))

 console.log(product);
   if (!product) {

      next(
         {
         message: "product not found",
         statusCode: 404,
      }
   );
      return;
   }

   res.status(200).json({
      message: "product by id ${id} fetched",
      success: true,
      date: product,
   });
};

//create
export const create = (req, res,) =>{
   //check authentication
   //authorization

   // res.send("<h1>Product created</h1>");
   const {name, category, price, stock} = req.body;

products.push({
   name,
   category,
   price,
   stock,
   createdAt:new Date(Date.now()),
   _id: products.length + 1,
})

 res.status(201).json({
    message: "product created",
    success: true,
    date: products[products.length - 1]
   });
};


//update
//chk 
export const update = (req, res) => {
   res.status(200).json({
      message: `product updated`,
      success: true,
      data: {},
   });
};


//delete
export const remove = (req, res) => {
 res.status(200).json({
    message: `product delete`,
    success: true,
    date: null,
   });
};
