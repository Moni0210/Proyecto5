var express= require('express');
var path = require('path')
var app = express();
const pug =require('pug')
const IniciarBD =require('./Config/conectar');
const Libreria = require('./public/model/Libreria');

const modelregistro = require('./public/model/Registro')
const modelLibreria = require('./public/model/Libreria')
const BodyParser = require('body-parser');
const bodyParser = require('body-parser');
const Registro = require('./public/model/Registro');
var publicPath=path.resolve(__dirname+ '/public')
var publicPath=path.resolve(__dirname+ '/public')

app.use(express.static(publicPath));


app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(peticion, respuesta){
    respuesta.render("index.html",{
        titulo: "Libreria",
        textoParrafo: "Bienvenido"
    });
})


app.get('/tienda', function(peticion, respuesta){
    modelLibreria.find(function(err,Libreria){
        respuesta.render("tienda.pug",{
            Libreria:Libreria
        })

    });
})



app.get('/registro.html', function(peticion, respuesta,next){
    modelregistro.find(function(err,Registro){
         respuesta.render("registro.html",{
             Registro:Registro
         })
 
     });
 })
 
 app.get('/registro1', function(peticion, respuesta,next){
    var newRegistro = new Registro({
         Identficacion:peticion.query.TXID,
         Nombre:peticion.query.TXNombre,
         Apellido:peticion.query.TXApellido,
         FechaNacimiento:peticion.query.FechaNacimiento,
         Correo:peticion.query.TXemail,
         Pais:peticion.query.TXPais

    });
    console.log(newRegistro);
    newRegistro.save();
    respuesta.redirect("index.html")
          });

         
app.get('/agregarlibro.html', function(peticion, respuesta,next){
   modelLibreria.find(function(err,Libreria){
        respuesta.render("Agregarlibro.pug",{
            libreria:Libreria
        })

    });
})

app.get('/agregarlibro1', function(peticion, respuesta,next){
   var newLibro = new modelLibreria({
        Nombre:peticion.query.txtNombre,
        Precio:peticion.query.txtPrecio,
        descripcion:peticion.query.txtdescripcion,
        Imagen:peticion.query.txtImagen
   });
   console.log(newLibro);
   newLibro.save();
   respuesta.redirect("Tienda")
         });
         
app.use( function(peticion, respuesta){
    respuesta.status(400);
    let URLerror= peticion.originalUrl
    respuesta.render("404.pug" , {textoError:URLerror});

})

app.listen(4000, function(){
    console.log('escuchando en el puerto 4000');
    IniciarBD()
})