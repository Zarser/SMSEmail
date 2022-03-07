require('dotenv').config();
const accountSid = process.env.TWILIO_ACC_SID;
// console.log(accountSid);
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.messages.create({
    body: 'Hoppas detta lilla meddelandet kommer fram!/ Kristoffer',
    from: '+19039127235',
    to:'+46737345086'
})
.then( message => console.log(message))
.catch((err) => console.log(err));