const express = require('express');
const app =express()
const Router = require("./router")
app.set("view engine","ejs")

const port = 3000;

app.use(Router)

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(3000,(req,res)=>{
    console.log("connected successfully");
})