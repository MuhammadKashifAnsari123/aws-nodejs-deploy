import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 8000;

app.get("/api/get", (req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.get("/api/get_user_details",(req, res) => {
    res.send({
            user:{
                name:"Kashif Ansari",
                age:21,
                contact:"03092662658",
            },env:process.env.NAME
        })
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})