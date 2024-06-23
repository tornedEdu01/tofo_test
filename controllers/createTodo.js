//import the model
const Todo = require("../models/Todo");

//define route handler (jis path se yha aenge)
exports.createTodo=async(req,res)=>{
    try{
        //extract title and description 
        const{title,description}=req.body;
        //create a new Todo obj and insert in DB
        const response = await Todo.create({title,description});
        //send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        );

    }
    catch(e){
        console.error(e);
        console.log(e);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:e.message,
        })
    }
}