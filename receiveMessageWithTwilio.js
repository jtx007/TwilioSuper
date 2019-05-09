const http = require('http');
const express = require('express');
const bodyparser = require('body-parser')
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.use(bodyparser.urlencoded({ extended: false }))

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message(`Hi, It looks like your phone number is was born in ${req.body.FromCountry}`);

    res.writeHead(200, {
        'Content-Type': 'text/xml'
    });
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
});