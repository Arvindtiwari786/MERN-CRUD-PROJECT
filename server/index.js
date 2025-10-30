const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const stuRoute = require("./routes/studentRoute")
require("dotenv").config()


//database connectivity
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("db connected successfully")
})

//middlewears

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/students", stuRoute)
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})