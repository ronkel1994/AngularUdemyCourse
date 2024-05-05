const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/taskManager')
.then(()=>console.log("Db connected successfully"))
.catch((error)=>console.log(error));

module.exports = mongoose;