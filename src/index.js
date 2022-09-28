const express=require("express");


const app=express();


require('./database');

app.listen(8000,()=>{
    console.log("Servidor rodando na porta 8000");
})
