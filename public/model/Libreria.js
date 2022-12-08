const mongoose=require('mongoose')
const libreriaBD = new mongoose.Schema(
    {
        Nombre:{type:String},
        Precio:{type:Number},
        descripcion:{type:String},
        Imagen:{type:String}

    },
    //no poner version de mongo
    {versionKey:false,
    timestamps:true}
)
module.exports =mongoose.model('camisetas',libreriaBD);