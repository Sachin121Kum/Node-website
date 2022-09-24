const express = require('express');
const path = require("path");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000


const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send("hii I am Success");
});

app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`)
});