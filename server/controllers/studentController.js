const stuModel=require("../models/studentModel")

const datasave = async(req, res) => {
    const {rollno, name, city, fees} = req.body;
    const student=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send({msg:"data save successfully"})
}

const displaydata = async (req,res)=>{
    const mydata = await stuModel.find();
    res.send(mydata);
}
const dataSearch=async(req,res)=>{
    
    const {rno}=req.body
    const student=await stuModel.find({rollno:rno})
    res.send(student)
}
const deleteData=async(req,res)=>{
    const {id}=req.query
    const student=await stuModel.findByIdAndDelete(id)
    
    res.send({msg:"data deleted"})
}
const editData=async(req,res)=>{
    const {id}=req.query
    const student=await stuModel.findById(id)
    res.send(student)
}
const saveEditData=async(req,res)=>{

    const {_id,rollno,name,city,fees}=req.body
    const student=await stuModel.findByIdAndUpdate(_id,{rollno:rollno,name:name,city:city,fees:fees})
    res.send({msg:"data edit succesfully"})
}
module.exports={
    datasave,displaydata,dataSearch,deleteData,editData,saveEditData
}