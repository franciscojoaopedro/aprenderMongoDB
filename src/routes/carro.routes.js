const express=require("express");
const mongoose=require("mongoose");
const route=express.Router();

const Carro=require("../models/carro");

route.post("/",async (req,res)=>{
    try{
    const novo_carro= req.body;
    const carro = await new Carro(novo_carro).save();
    res.json({error:false, carro});
    }catch(err){
        res.json({error:true, message:err.message})
    }

})



route.get("/",async(req,res)=>{
    try{
        const carros= await Carro.find().populate("usuario_id","name email");
        res.json({error:false,carros})
    }catch(err){
        res.json({error:true,message:err.message})
    }
})


route.get("/id",async(req,res)=>{
    try{
        const carro= await Carro.findById(req.params.id).populate("usuario_id", "name email");
        res.json({error:false,carro})
    }catch(err){
        res.json({error:true,message:err.message})
    }
})



module.exports=route;