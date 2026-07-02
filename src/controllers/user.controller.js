import mongoose from "mongoose";

const users = [];
//user schema- defin e data type
const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         minlength: 3,
      },
      email: {
      type: String,
         required: true,
         unique: true,
   },

   password: {
   type: String,
   required: true,
},
   },

   { timestamps: true },
   
);
 //creating user model
 const user = mongoose.model("user", userSchema);



//crud users
//get all users
//get /users -> user page
//route param (:id)
export const getAll = async (req, res, next) => {
   try{

   // res.send("<h1>All Users</h1>");
   const query = req.query;
   console.log(query);

   //dataabase find all query
   const users = await User.find({});


   res.status(200).json({
      message: "users fetched",
      success: true,
      date: users,
      //{
      //      _id: 1, 
      //      name: "John Doe",
      //      email: "john@gmail.com"
      //  },
   });
} catch (error) {

}next(error);
};

//get by id
//users/100 => {id:100}
// /posts/:userId/:postId => /posts/1/2 => {postId:2,userId}

export const getById = async (req, res, next) => {
   try{
   // console.log("get all user");
   // console.log(req.product);
   // res.send("<h1>All Users</h1>");
   //req.param => {} => {id:1}
   //console.log(req.params);
   //const id = req.params.id;

   const { id } = req.params;

   // const user = users.find((user) => user._id === Number(id));
   const user = await User.findById({_id: id});
// console.log(user);
   if (!user) {

      next(
         {
         message: "user not found",
         statusCode: 404,
      }
   );
      return;
   }

   res.status(200).json({
      message: "user by id ${id} fetched",
      success: true,
      date: user,
   });
} catch (error){
next(error);
}
};


//create
//router.post("/", (req, res) =>{
export const create = async (req, res) => {
   try{
   // res.send("<h1>User created</h1>");
   //console.log(req.body);
   const { name, email, password } = req.body;
   const user = await User.create({
      name,
      email,
      password,
      // createdAt: Date.now(),
      // _id: users.length + 1,
   });

   res.status(201).json({
      message: "user created",
      success: true,
      date: users[users.length - 1],
   });
} catch (error){
   next(error);
}
};

//update
export const update = async(req, res) => {
   try {
   //res.send("<h1>User updated</h1>");
   // const id = req.params.id;
   const { id } = req.params;
   const user = await User.findByIdAndUpdate(
      id,
            req.body,
            { new: true }
        );

   // const index = users.findIndex((user) => user._id === Number(id));
   //user. findByIdAndUpdate({_id:id,name, email, password},{new:true})

   if (index === -1) {
      res.status(404).json({
         message: "user not found",
         success: false,
         date: null
      });
      return
   }

   users[index] = {
      ...users[index],
      name,
      email,
      password,
   };

   res.status(200).json({
      message: "user updated",
      success: true,
      date: users[index],
   });
} catch (error) {
   next();
}
};


// //delete
export const remove = async (req, res) => {
   try {
   // res.send("<h1>User Deleted</h1>");

   const { id } = req.params;
   // const index = users.findIndex((user) => user._id === Number(id));
   const user = await User.findByIdAndDelete(id);
   if (index === -1) {
      res.status(404).json({
         message: "user not found",
         success: false,
         date: null
      });
      return
   }

   users.splice(index, 1);
   res.status(200).json({
      message: "user deleted",
      success: true,
      date: null
   });
} catch (error) {
   next (error);
}
};

