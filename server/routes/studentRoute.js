const express=require("express")
const route=express.Router()
const stuController=require("../controllers/studentController")
const { now } = require("mongoose")


route.post("/save",stuController.datasave)
route.get("/display",stuController.displaydata);
route.post("/search" ,stuController.dataSearch)
route.delete("/deletedata",stuController.deleteData)
route.get("/editDisplay",stuController.editData);
route.post("/saveData",stuController.saveEditData)



module.exports=route