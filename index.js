//import
const suma=require("./modulos/suma");
const multiplo=require("./modulos/multiplicacion");
const resta=require("./modulos/resta");
const division=require("./modulos/division");

/*console.log(suma(50,60));
console.log(resta(60,50));
console.log(multiplo(2,6));
console.log(division(10,2));*/

//1. importar libreria express
const express= require("express");
const path =require("path");
const bodyParser=require("body-parser");

//2. Instanciar objeto de tipo server o App a partir de express
const app = express();

//establecer un middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//3. declarar una variable que guarde el puerto
const port = 8080;

//4. crear una ruta http
app.get("/", (req, res)=>{
    //res.send("Hola Mundo");
    res.sendFile(path.join(__dirname,"./vistas/index.html"));
});
//necesita una ruta y una callback function
app.get("/suma/:numeroA/:numeroB", (req, res)=>{
    console.log(req.params);

    let numA=parseFloat(req.params.numeroA);
    let numB=parseFloat(req.params.numeroB);

    let result=suma(numA, numB);

    res.status(200).json(result);
})

app.post("/suma", (req, res)=>{
    console.log(req.body.a);
    console.log(req.body.b);
    res.status(200).json("Hola");
});

//5. Inicializar el listener del servidor
app.listen(port, ()=>{
    console.log("server start on http://localhost:"+port);
})