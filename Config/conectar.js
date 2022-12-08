const mongoose = require('mongoose');

const uri='mongodb://127.0.0.1:27017/Proyecto5'


module.exports=()=>{
  const db =()=>{
    mongoose.connect(
        uri,{
            keepAlive:true,
            useNewUrlParser:true,
            useUnifiedTopology:true},

        (err) =>{
            if(err){
                console.log("La conexion fallo"+err.message)
            }else{
                console.log("Conexion exitosa")
            }
        }

    )
   
  }  
  db();
}
