const express=require("express");
const app=express();
const cors=require("cors")
require('./database');
app.use(cors())
app.use(express.json())
const Usuario=require("./routes/usuario.routes");
const Carro=require("./routes/carro.routes");


app.use("/usuario",Usuario);
app.use("/carro",Carro);


app.listen(8000,()=>{
    console.log("Servidor rodando na porta 8000");
})
