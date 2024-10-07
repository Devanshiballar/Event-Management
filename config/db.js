const { default: mongoose } = require("mongoose");

exports.db=mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("database connected...");
    
})
.catch((err)=>{
    console.log("database error");
    
})