// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "AC7c5083b09b2102370b58180871f76293";
const authToken = "2b402317807ae91823fe595486d1871a";
const client = require("twilio")(accountSid, authToken);

function sendTestMessage(sender, message) {
    return new Promise((resolve, reject) => {
        client.messages
            .create({
                //Número de nuestro bot en sandBox
                from: "whatsapp:+14155238886",
                //cuerpo del mensaje
                body: message,
                //número del usuario al que queremos mandar un mensaje
                to: "whatsapp:+"+sender,
            })
            .then((message) => resolve())
            .catch((err)=>reject(err));
    });
}

//Exportamos la función para que sea aplicable en app.js
module.exports={
    sendTestMessage,
}
