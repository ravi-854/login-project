const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginform").then(()=>{
    console.log("connected to database");
}).catch((e)=>{
    console.log(e);
})


const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})


const usermodel =mongoose.model("userdetail",schema)

module.exports=usermodel;