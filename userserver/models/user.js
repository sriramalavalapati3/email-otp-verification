const mongoose=require("mongoose");
const registerSchema=mongoose.Schema({
    "Name":String,
    "email":String,
    "mobile":String,
    "password":String

})

const Rmodel=mongoose.model("regisuser",registerSchema);

module.exports={Rmodel}