const mongoose=require("mongoose")

const Usuario=mongoose.model("Usuario",{
    name:{
        type:String,
        required:true
    },
    email:String,
    senha:{
        type:String,
        required:()=>{
            return this.idade>18
        }
    },
    idade:Number,
    cor_olhos:{
        type:String,
        enum:['azul','preto','marron','verde'],
        required:true
    },
    status:Boolean,
    habilidades:Array,
    outros:Object,


})

module.exports=Usuario;