const category = [];


//crud product
//get all products
//products
export const getAll = (req, res) =>{
   // res.send("<h1>All product</h1>");
 res.status(200).json({
    message: "category fetched",
    success: true,
    date:category,
   });
};

//get by id
export const getById = (req, res) =>{
   // res.send("<h1>All product</h1>");
const id = req.params;

const category = category.find((category) => product.id == Number(id))

 if (!category) {
   res.status(404).json({
    message: "category not found",
    success: false,
    date: null,
   });
   return;
}
res.status(200).json({
   message:`category by id ${id} fetched`,
   success: true,
   data: category,
});
};

//create
export const create = (req, res) =>{
   // res.send("<h1>Product created</h1>");
   const {categoryName, description} = req.body;

category.push({
   categoryName,
   description,
   createdAt:new Date(Date.now()),
   _id: category.length + 1,
})

 res.status(201).json({
    message: "category created",
    success: true,
    date: category[category.length - 1]
   });
};


//update
export const update = (req, res) =>{
   res.status(200).json({
      message: `category updated`,
      success: true,
      data: {},
   });
};


//delete
export const remove = (req, res) => {
 res.status(200).json({
    message: `category delete`,
    success: true,
    date: null,
   });
};
