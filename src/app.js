const express = require('express');
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000


app.get('/',(req,res)=>{
    res.send("hii I am Success");
});

app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`)
});