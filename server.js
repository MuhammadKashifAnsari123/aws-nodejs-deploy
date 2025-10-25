import express from "express";
const app = express();
const PORT = 3000;

app.get("/api/get", (req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})