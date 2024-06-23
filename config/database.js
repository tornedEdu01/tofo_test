const mongoose = require("mongoose");

//env me jo define h vo load karne ke lie 
require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
    })
    .then(()=>console.log("DB ka connection success"))
    .catch((e)=>{
        console.log("Issue in DB connection");
        console.error(e.message);
        process.exit(1);
    });
}
module.exports = dbConnect;