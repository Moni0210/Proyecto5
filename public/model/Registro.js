const mongoose=require('mongoose')
const RegistroBD = new mongoose.Schema(
    {
        Identficacion:{type:String},
        Nombre:{type:String},
        Apellido:{type:String},
        FechaNacimiento:{type:String},
        Correo:{type:String},
        Pais:{type:String}

    },
    //no poner version de mongo
    {versionKey:false,
    timestamps:true}
)
module.exports =mongoose.model('registro',RegistroBD);