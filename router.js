const express =require("express")

const Router = express.Router();
const user = require("./database")


Router.get("/",(req,res)=>{
    res.render("index")
})


Router.post("/register",async(req,res)=>{
    try {
        const data = new user(req.body)
        const savedata = await data.save()
        console.log(password)
     console.log(savedata);
    } catch (error) {
        console.log(error);
    }
})


module.exports= Router;