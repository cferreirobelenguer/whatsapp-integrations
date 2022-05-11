

const express = require('express')
const app = express()
const twilio=require("./twilio");
app.use(express.urlencoded({extended:true}));
//Twilio nos va a mandar datos en formato json
app.use(express.json());
var respuesta="";
app.post('/webhook', function (req, res) {
    console.log("req->", req.body);
    //Entrenamiento del bot, cogemos la info del Body que es lo que escribe el usuario y en función de eso generamos una respuesta u otra
    //Intent de saludo
    if((req.body.Body.indexOf("hola")!=-1)||(req.body.Body.indexOf("Hola")!=-1)||(req.body.Body.indexOf("buenas tardes")!=-1)||(req.body.Body.indexOf("Buenas tardes")!=-1)||(req.body.Body.indexOf("Saludos")!=-1)||(req.body.Body.indexOf("saludos")!=-1)||(req.body.Body.indexOf("Buenos días")!=-1)||(req.body.Body.indexOf("buenos dáas")!=-1)){
        respuesta="Bienvenido a beautyBot, ¿En qué puedo ayudarte? :-)";
    //Intent de horario
    }else if((req.body.Body.indexOf("Franja horaria")!=-1)||(req.body.Body.indexOf("Horario")!=-1)||(req.body.Body.indexOf("horario")!=-1)||(req.body.Body.indexOf("hora")!=-1)||(req.body.Body.indexOf("Apertura")!=-1)||(req.body.Body.indexOf("franja horaria")!=-1)||(req.body.Body.indexOf("apertura")!=-1)){
        respuesta="Nuestro horario es de 10:00 h a 20:00 h. ¿Puedo ayudarte en algo más?";
    //Intent de precio
    }else if((req.body.Body.indexOf("precio")!=-1)||(req.body.Body.indexOf("Precio")!=-1)||(req.body.Body.indexOf("coste")!=-1)||(req.body.Body.indexOf("cuánto cuesta")!=-1)||(req.body.Body.indexOf("Cuánto cuesta")!=-1)||(req.body.Body.indexOf("Cuánto cuestan")!=-1)||(req.body.Body.indexOf("cuánto cuestan")!=-1)){
        respuesta="Higiene Facial Purifying tiene un coste de  49 € ; limpieza Hydral infusión tiene un coste de 70 € , tratamiento con peeling químico tiene un coste de 80 € y maquillaje completo tiene un coste de 70 €. Te informo que tienes una promo de primavera en la que el tratamiento de peeling cuesta 50 € , los tratamientos de limpieza cuestan 40 € y maquillaje completo 50 € (válido hasta el 30 de junio). ¿Puedo ayudarte en algo más?";
    //Intent de ubicación del centro
    }else if((req.body.Body.indexOf("localización")!=-1)||(req.body.Body.indexOf("ubicación")!=-1)||(req.body.Body.indexOf("ubicacion")!=-1)||(req.body.Body.indexOf("Ciudad")!=-1)||(req.body.Body.indexOf("ciudad")!=-1)||(req.body.Body.indexOf("barrio")!=-1)||(req.body.Body.indexOf("Barrio")!=-1)||(req.body.Body.indexOf("Lugar")!=-1)||(req.body.Body.indexOf("lugar")!=-1)||(req.body.Body.indexOf("Zona")!=-1)||(req.body.Body.indexOf("zona")!=-1)||(req.body.Body.indexOf("Ubicacion")!=-1)||(req.body.Body.indexOf("Ubicación")!=-1)||(req.body.Body.indexOf("Localización")!=-1)||(req.body.Body.indexOf("localizacion")!=-1)||(req.body.Body.indexOf("Localización")!=-1)||(req.body.Body.indexOf("Dónde estáis")!=-1)||(req.body.Body.indexOf("dónde estáis")!=-1)||(req.body.Body.indexOf("donde estais")!=-1)||(req.body.Body.indexOf("donde estáis")!=-1)||(req.body.Body.indexOf("Donde estáis")!=-1)){
        respuesta="Estamos en c/Miguel Yuste nº 35 28022 Madrid. ¿Puedo ayudarte en algo más?";
    //Intent de transporte
    }else if((req.body.Body.indexOf("transporte")!=-1)||(req.body.Body.indexOf("Transporte")!=-1)||(req.body.Body.indexOf("medio de transporte")!=-1)||(req.body.Body.indexOf("Medio de transporte")!=-1)||(req.body.Body.indexOf("transporte cercano")!=-1)||(req.body.Body.indexOf("transporte cercano")!=-1)||(req.body.Body.indexOf("metro")!=-1)||(req.body.Body.indexOf("medios para ir")!=-1)||(req.body.Body.indexOf("Medios para ir")!=-1)||(req.body.Body.indexOf("Metro")!=-1)||(req.body.Body.indexOf("Autobús")!=-1)||(req.body.Body.indexOf("autobús")!=-1)||(req.body.Body.indexOf("bus")!=-1)||(req.body.Body.indexOf("Bus")!=-1)||(req.body.Body.indexOf("Cómo voy")!=-1)||(req.body.Body.indexOf("cómo voy")!=-1)||(req.body.Body.indexOf("cómo puedo ir")!=-1)||(req.body.Body.indexOf("Cómo puedo ir")!=-1)||(req.body.Body.indexOf("como voy")!=-1)||(req.body.Body.indexOf("Como voy")!=-1)||(req.body.Body.indexOf("Como puedo ir")!=-1)||(req.body.Body.indexOf("como puedo ir")!=-1)){
        respuesta="Puedes ir en metro, línea 5 Torre Arias. También tienes los autobuses: 28,38,105 y 140 cerca :) .¿Puedo ayudarte en algo más?";
    //Intent de tratamientos
    }else if((req.body.Body.indexOf("tratamientos",0)!=-1)||(req.body.Body.indexOf("Tratamientos",0)!=-1)||(req.body.Body.indexOf("servicios",0)!=-1)||(req.body.Body.indexOf("Servicios",0)!=-1)||(req.body.Body.indexOf("producto",0)!=-1)||(req.body.Body.indexOf("Producto",0)!=-1)||(req.body.Body.indexOf("Productos",0)!=-1)||(req.body.Body.indexOf("Productos",0)!=-1)){
        respuesta="Tenemos Higiene Facial Purifycing, Hydral infusión, peeling químico o maquillaje completo. ¿Puedo ayudarte en algo más?";
    //Intent de contacto
    }else if((req.body.Body.indexOf("redes sociales",0)!=-1)||(req.body.Body.indexOf("Redes sociales",0)!=-1)||(req.body.Body.indexOf("contacto",0)!=-1)||(req.body.Body.indexOf("Contacto",0)!=-1)||(req.body.Body.indexOf("email",0)!=-1)||(req.body.Body.indexOf("Email",0)!=-1)||(req.body.Body.indexOf("teléfono",0)!=-1)||(req.body.Body.indexOf("Teléfono",0)!=-1)||(req.body.Body.indexOf("telefono",0)!=-1)||(req.body.Body.indexOf("Teléfono",0)!=-1)||(req.body.Body.indexOf("contactar",0)!=-1)||(req.body.Body.indexOf("Contactar",0)!=-1)||(req.body.Body.indexOf("móvil",0)!=-1)||(req.body.Body.indexOf("Móvil",0)!=-1)||(req.body.Body.indexOf("movil",0)!=-1)||(req.body.Body.indexOf("Movil",0)!=-1)){
        respuesta="Puedes mandarnos un email a info@beauty.com, dejarnos un whatsapp  o llamarnos a 687564786, o si lo prefieres puedes entrar en nuestras redes sociales a través de nuestra web . Para pedir cita puedes hacerlo a través de nuestra web. ¿Puedo ayudarte en algo más?";
    //Intent de ofertas
    }else if((req.body.Body.indexOf("oferta",0)!=-1)||(req.body.Body.indexOf("Oferta",0)!=-1)||(req.body.Body.indexOf("Descuentos",0)!=-1)||(req.body.Body.indexOf("descuentos",0)!=-1)||(req.body.Body.indexOf("Ofertas",0)!=-1)||(req.body.Body.indexOf("ofertas",0)!=-1)||(req.body.Body.indexOf("promo",0)!=-1)||(req.body.Body.indexOf("Promo",0)!=-1)||(req.body.Body.indexOf("promociones",0)!=-1)||(req.body.Body.indexOf("Promociones",0)!=-1)){
        respuesta="Tienes todos los tratamientos al 10% (válido hasta el 30 de junio) :D. ¿Puedo ayudarte en algo más?";
    }else if((req.body.Body.indexOf("no",0)!=-1)||(req.body.Body.indexOf("No",0)!=-1)||(req.body.Body.indexOf("Adios",0)!=-1)||(req.body.Body.indexOf("adios",0)!=-1)||(req.body.Body.indexOf("eso es todo",0)!=-1)||(req.body.Body.indexOf("Eso es todo",0)!=-1)||(req.body.Body.indexOf("Un saludo",0)!=-1)||(req.body.Body.indexOf("un saludo",0)!=-1)||(req.body.Body.indexOf("Hasta luego, muchas gracias",0)!=-1)||(req.body.Body.indexOf("hasta luego",0)!=-1)||(req.body.Body.indexOf("Hasta luego",0)!=-1)){
        respuesta="¡Me encanta ayudarte!, estoy aquí para lo que necesites. ¡Hasta la próxima! ;)";
    }else{
        //intent default fallback, cuando el bot no entiende lo que el usuario dice
        respuesta="Lo siento, no te entiendo :(";
    }
    twilio.sendTestMessage(req.body.WaId, respuesta);
});


app.listen(3000,()=>{
    console.log("servidor montado en el puerto 3000")
})