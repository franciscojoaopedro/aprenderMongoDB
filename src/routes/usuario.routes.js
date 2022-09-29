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
});

route.get("/",async(req,res)=>{
    try{
        const usuario=await  Usuario.find();
        res.json({error:false,usuario})
    }catch(err){
        res.json({error:true,message:err.message})
    }
})

route.get("/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const usuario= await Usuario.findById(id);
        res.json({error:false, usuario});
    }catch(err){
        res.json({error:true,message:err.message})
    }
})

route.put("/:id", async  (req,res)=>{
    try{
        const id=req.params.id;
        const usuario= await Usuario.findByIdAndUpdate(id,req.body,{new:true})
        res.json({error:false, usuario})
    }catch(err){
        res.json({error:true, message:err.message})
    }
})

route.delete("/:id", async (req,res)=>{
    try{
        const id=req.params.id;
        await Usuario.findByIdAndDelete(id);
        res.json({error:true, message:"usuario deletado"})
        
    }catch(err){
        res.json({error:true,message:err.message})
    }
})

module.exports=route;