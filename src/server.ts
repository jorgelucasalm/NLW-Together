import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    return res.send("Ola")
});

app.listen(3232, ()=>{
    console.log("Server is running");
});