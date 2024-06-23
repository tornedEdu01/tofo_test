const express = require("express");
const app = express();
const cors = require('cors');

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

app.use(cors());
//import routes for TODO api
const todoRoutes = require("./routes/todo");
//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
});

//connect to database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1> this is HOMEPAGE body </h1>`);
});