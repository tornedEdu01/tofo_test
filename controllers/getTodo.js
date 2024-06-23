//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({});

    // Response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

exports.getTodoById = async(req,res) =>{
    try{
        //extract item based on Id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        //given data id is not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message : "No data found with given id",
            })
        }
        //data found with given id
        res.status(200).json({
            success:true,
            data:todo,
            message: `todo ${id} data fetched successfully`,
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error :err.message,
            message : "Internal server error",
        });
    };
};
