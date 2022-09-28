const express=require("express");
const mongoose=require("mongoose");
const route=express.Router();

const Usuario=require("../models/usuario");

route.post("/",async (req,res)=>{
    try{
    const novo_usuario= req.body;
    const usuario = await new Usuario(novo_usuario).save();
    res.json({error:false, usuario});
    }catch(err){
        res.json({error:true, message:err.message})
    }
})


module.exports=route;