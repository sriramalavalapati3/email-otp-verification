const express=require("express");
const cors = require('cors')
const app=express();
app.use(express.json());
app.use(cors())
const {connection}=require("./config/config")
const {mroute}=require("./mail/mail")
app.use("/mail",mroute)
app.listen(8080,async()=>{
    try {
        await connection

        console.log("server running at port no 8080 \n db connected");

    } catch (error) {
       console.log(error+" in connection") 
    }
})