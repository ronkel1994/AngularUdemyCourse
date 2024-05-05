const express = require('express');
const app = express();

const mongoose = require('./Db/mongoose');

app.listen(3000,function(){
    console.log("Server connected on port 3000 successfully");
});