const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/locacao',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});