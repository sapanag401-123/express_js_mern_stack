const products = [];


//crud product
//get all products
//products
export const getAll = (req, res) =>{
   // res.send("<h1>All product</h1>");
 res.status(200).json({
    message: "product fetched",
    success: true,
    date:product,
   });
};

//get by id
export const getById = (req, res) =>{
   // res.send("<h1>All product</h1>");
const id = req.params;

const product = products.find((product) => product.id == Number(id))

 if (!product) {
   res.status(404).json({
    message: "product not found",
    success: false,
    date: null,
   });
   return;
}
res.status(200).json({
   message:`product by id ${id} fetched`,
   success: true,
   data: product,
});
};

//create
export const create = (req, res) =>{
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
