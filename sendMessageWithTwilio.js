require('dotenv').config()
const today = new Date();



const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

client.messages
    .create({
        body: `Greetings! The current time is: ${today.getMonth()}/${today.getDay()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()} XXXXXX PJL00T52POTQXGN`,
        from: '+19292054807',
        to: '+12092104311'
    })
    .then(message => console.log(message.sid));
