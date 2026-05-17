//API for book reading/writing web
const express = require('express')
const bookRoute=require("./routes/books.route")

const app=express();
require("./database/connection")
app.use(express.json())
//Routes
app.use("/api",bookRoute)
app.listen(3000,()=>{
    console.log("THe server is running on port 3000.");
    
})

