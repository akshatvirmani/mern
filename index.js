const express = require("express");
const bodyParser=require('body-parser');
const connect=require("./config/db");
const router=require('./routes/userRoutes');
const postRoutes= require('./routes/postRoutes');
const path=require('path');
const { listen } = require("express/lib/application");
const res = require("express/lib/response");
const profileRoutes=require('./routes/profileRoutes')
require('dotenv').config()
const app=express();

connect();

app.use(bodyParser.json());
app.use('/',router);
app.use('/',postRoutes);
app.use('/',profileRoutes);
const PORT=process.env.PORT  || 5000;
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'/client/build/')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
app.listen(PORT,()=>{
    console.log('oo');
});