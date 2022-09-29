const express=require("express");
const mongoose=require("mongoose");
const route=express.Router();

const Carro=require("../models/carro");

/* Criação de carro*/
route.post("/",async (req,res)=>{
    try{
    const novo_carro= req.body;
    const carro = await new Carro(novo_carro).save();
    res.json({error:false, carro});
    }catch(err){
        res.json({error:true, message:err.message})
    }

})
/* ler todos os carro*/
route.get("/",async(req,res)=>{
    try{
        const carros= await Carro.find().populate("usuario_id","name email");
        res.json({error:false,carros})
    }catch(err){
        res.json({error:true,message:err.message})
    }
})
/*pegar apenas um carro*/
route.get("/:id",async(req,res)=>{
    try{
        const carro= await Carro.findById(req.params.id).populate("usuario_id", "name email");
        res.json({error:false,carro})
    }catch(err){
        res.json({error:true,message:err.message})
    }
})

/* Atualização */
route.put("/:id", async (req,res)=>{
    try{
        const id=req.params.id;
        const carro= await  Carro.findByIdAndUpdate(id,req.body,{new:true})
        res.json({error:false, carro})
    }
    catch(err){
        res.json({error:true,message:err.message})
    }
})

/* Delete */

route.delete("/:id", async (req,res)=>{
    try{
        const id=req.params.id;
        await Carro.findByIdAndDelete(id);
        res.json({error:false, message: "deletado"})
    }catch(err){
        res.json({error:true, message:err.message})
    }
})

module.exports=route;