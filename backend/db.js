  const mongoose = require('mongoose');
  const connectDb =async (url) => {
   await mongoose.connect(url).then(()=>{ console.log("Mongodb connected");}
   ).catch((error)=>{console.log("database connection error :",error)})
}
module.exports =  connectDb ;